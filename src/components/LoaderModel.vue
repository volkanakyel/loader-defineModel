<script setup>
import { ref, watch, onUnmounted } from "vue";

const props = defineProps({});

const duration = defineModel("duration", { type: Number, default: 5000 });
const isLoading = defineModel("loading", { type: Boolean, default: false });

let loadingValue = ref(0);
let intervalId = null;

const startLoading = () => {
  clearInterval(intervalId);
  loadingValue.value = 0;

  const intervalDuration = duration.value * 10;
  intervalId = setInterval(() => {
    if (loadingValue.value < 100) {
      loadingValue.value += 5;
    } else {
      clearInterval(intervalId);
    }
  }, intervalDuration);
};

watch(
  () => isLoading.value,
  (newVal) => {
    if (newVal) {
      startLoading();
    } else {
      loadingValue.value = 0;
      clearInterval(intervalId);
    }
  }
);

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
      <span v-if="loadingValue >= 100">Done</span>
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
