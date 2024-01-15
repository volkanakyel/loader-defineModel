<script setup>
import { ref, onUnmounted } from "vue";
let loadingValue = ref(0);
let intervalId = null;

const startLoading = (duration = 5000) => {
  clearInterval(intervalId);
  loadingValue.value = 0;

  setTimeout(() => {
    const intervalDuration = duration / 100;
    intervalId = setInterval(() => {
      if (loadingValue.value < 100) {
        loadingValue.value += 5;
      } else {
        clearInterval(intervalId);
      }
    }, intervalDuration);
  }, 500);
};

const resetLoading = () => {
  loadingValue.value = 0;
  clearInterval(intervalId);
};

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="loader-container">
    <div class="loader-classic">
      <div class="loader-activity" :style="{ width: loadingValue + '%' }"></div>
    </div>
    <div class="loader-status">
      <span>{{ loadingValue }}% </span>
      <span>Done</span>
    </div>
    <div class="section-ctas">
      <button class="button-stop" @click="startLoading(5000)">
        Relaunch (5s)
      </button>
      <button class="button-stop" @click="startLoading(10000)">
        Relaunch (10s)
      </button>
      <button class="button-stop" @click="resetLoading">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
}
.loader-classic {
  width: 320px;
  height: 12px;
  background-color: #f0f0f0;
  border-radius: 6px;
  position: relative;
}

.loader-activity {
  position: absolute;
  height: 100%;
  background-image: linear-gradient(to right, #0038f5, #9f03ff);
  border-radius: 6px;
  transition: width 0.5s ease;
}

.loader-status {
  margin-top: 16px;
}

.section-ctas {
  margin-top: 12px;
  display: flex;
  gap: 12px;
}

.button-stop {
  border: none;
  padding: 12px;
  border-radius: 6px;
  background-color: #46ba87;
  color: #fff;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.button-stop:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
</style>
