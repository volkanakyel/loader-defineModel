<script setup>
import { ref, onUnmounted } from "vue";
let loadingValue = ref(0);
let intervalId = null;

const loadingDuration = ref(5);

const startLoading = () => {
  clearInterval(intervalId);

  const intervalDuration = loadingDuration.value * 10;
  intervalId = setInterval(() => {
    if (loadingValue.value < 100) {
      loadingValue.value += 5;
    } else {
      clearInterval(intervalId);
    }
  }, intervalDuration);
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
    <div class="duration-input">
      <input
        type="number"
        id="duration"
        name="duration"
        min="1"
        max="60"
        step="1"
        value="loadingDuration"
        v-model="loadingDuration"
      />
      <label for="duration">Duration (seconds)</label>
    </div>
    <div class="section-ctas">
      <button class="button-start" @click="startLoading()">
        Start Loading
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
</style>
