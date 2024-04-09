<template>
  <div class="board">
    <div v-for="(tile, index) in initialConfiguration" :key="index" :class="['tile', tile === 0 ? 'empty' : '']"
      @click="() => moveTile(index)">
      {{ tile !== 0 ? tile : '' }}
    </div>
  </div>
</template>

<script>
import { ref, watch, toRefs } from 'vue';

export default {
  props: {
    initialConfiguration: Array,
    onSolveCallback: Function,
  },
  setup(props) {
    const initialConfiguration = ref(props.initialConfiguration);
    watch(
      () => props.initialConfiguration,
      (newVal) => {
        initialConfiguration.value = newVal;
      }
    );

    const moveTile = (index) => {
      const emptyIndex = initialConfiguration.value.indexOf(0);
      const isValidMove = isValidMoveFunction(index, emptyIndex);

      if (isValidMove) {
        const newConfig = [...initialConfiguration.value];
        newConfig[emptyIndex] = newConfig[index];
        newConfig[index] = 0;
        initialConfiguration.value = newConfig;

        if (isSolved()) {
          props.onSolveCallback();
        }
      }
    };

    const isValidMoveFunction = (index, emptyIndex) => {
      const dimension = 4;
      const row = Math.floor(index / dimension);
      const col = index % dimension;
      const emptyRow = Math.floor(emptyIndex / dimension);
      const emptyCol = emptyIndex % dimension;

      return (
        (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
        (col === emptyCol && Math.abs(row - emptyRow) === 1)
      );
    };

    const isSolved = () => {
      for (let i = 0; i < initialConfiguration.value.length - 1; i++) {
        if (initialConfiguration.value[i] !== i + 1) return false;
      }
      return true;
    };

    return { ...toRefs(props), initialConfiguration, moveTile };
  },
};
</script>

<style>
.board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  width: 400px;
  height: 400px;
}

.tile {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a0e9fd;
  border: 1px solid #000;
  height: 100%;
}

.empty {
  background-color: #ffffff;
}
</style>
