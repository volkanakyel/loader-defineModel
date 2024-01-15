<script setup>
import LoaderClassic from "./components/LoaderClassic.vue";
import LoaderModel from "./components/LoaderModel.vue";
import { ref } from "vue";

const isLoading = ref(false);
const durationValue = ref(5000);
</script>

<template>
  <div class="app-container">
    <div class="loader-section">
      <div>
        <p class="loader-title">❌ Without define Model</p>
        <LoaderClassic />
      </div>
      <div>
        <p class="loader-title">✅ With defineModel</p>
        <LoaderModel
          v-model:loading="isLoading"
          v-model:duration="durationValue"
        />
        <div class="section-ctas">
          <button class="button-start" @click="isLoading = true">
            Start Loading
          </button>
          <button class="button-stop" @click="isLoading = false">
            Stop Loading
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-start {
  border: none;
  padding: 12px;
  border-radius: 6px;
  background-color: #46ba87;
  color: #fff;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.button-start:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
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
.app-container {
  max-width: 970px;
  margin: 52px auto;
}
.loader-section {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  padding: 24px;
}

.loader-title {
  margin-bottom: 8px;
}
.section-ctas {
  margin-top: 12px;
  display: flex;
  gap: 12px;
}
</style>
