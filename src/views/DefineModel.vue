<template>
  <h2>AboutView</h2>
  <label>
    Search: <input v-model.trim="search" maxlength="20">
  </label>
  <div class="app-container">
    <h2>Props & defineModel</h2>
    <div class="loader-section">
      <div>
        <p class="loader-title">❌ Without define Model</p>
        <LoaderClassic />
      </div>
      <div>
        <p class="loader-title">✅ With defineModel</p>
        <LoaderModel v-model:loading="isLoading" v-model:duration="durationValue" />
        <div class="duration-input">
          <input type="number" id="duration" name="duration" min="1" max="60" step="1" value="durationValue"
            v-model="durationValue" />
          <label for="duration">Duration (seconds)</label>
        </div>
        <div class="section-ctas">
          <button class="button-start" @click="isLoading = true">
            Start Loading
          </button>
          <button class="button-stop" @click="isLoading = false">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoaderClassic from "@/components/LoaderClassic.vue";
import LoaderModel from "@/components/LoaderModel.vue";
import { ref } from "vue";

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})

const isLoading = ref(false);
const durationValue = ref(5);
</script>


<style scoped>
.app-container {
  max-width: 970px;
  margin: 52px auto;
  padding: 16px;
}

.loader-section {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  margin-top: 24px;
}

.loader-title {
  margin-bottom: 8px;
}
</style>
