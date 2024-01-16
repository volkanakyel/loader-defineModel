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
        <div class="duration-input">
          <input
            type="number"
            id="duration"
            name="duration"
            min="1"
            max="60"
            step="1"
            value="10"
          />
          <label for="duration">Duration (seconds)</label>
        </div>
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
</style>
