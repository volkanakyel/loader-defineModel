<script setup>
import { debounce } from "lodash";
import { ref, watch } from "vue"

const movieInput = ref('');
const isLoading = ref(false);
const movieList = ref(null);
const API_KEY = import.meta.env.VITE_VUE_APP_MOVIE_API_KEY
const searchMovies = async (searchItem) => {
  try {
    isLoading.value = true;
    const endpoint = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${searchItem}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    movieList.value = data.Search;
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
}

const debouncedSearch = debounce(async () => {
  await searchMovies(movieInput.value);
}, 500)
watch(movieInput, () => {
  debouncedSearch();
})
</script>

<template>
  <div class="container">
    <h2>Auto completion</h2>
    <label for="search">Search a Movie from api</label>
    <div class="input-container">
      <input type="text" placeholder="Search your movie" v-model="movieInput" />
      <i v-if="isLoading" class="loader"></i>
    </div>
    <ul v-for="movie in movieList" :key="movie.id">
      <li>{{ movie.Title }}</li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 972px;
  margin: 48px auto;
  padding: 24px;

  h2 {
    text-align: center;
  }

  label {
    display: block;
    margin-top: 24px;
  }

  input {
    padding: 8px;
    border-radius: 8px;
    border: none;
    outline: none;
    border-bottom: 1px solid grey;
    width: 100%;
    margin-top: 4px;
  }
}

.input-container {
  position: relative;
  max-width: 382px;
}

.loader {
  position: absolute;
  height: 20px;
  width: 20px;
  top: 10px;
  right: 10px;
  display: inline-block;
  animation: around 5.4s infinite;
}

@keyframes around {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}

.loader::after,
.loader::before {
  content: "";
  background: white;
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-color: #333 #333 transparent transparent;
  border-style: solid;
  border-radius: 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  animation: around 0.7s ease-in-out infinite;
}

.loader::after {
  animation: around 0.7s ease-in-out 0.1s infinite;
  background: transparent;
}
</style>