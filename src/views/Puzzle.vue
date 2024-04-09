<script setup>
import PuzzleComp from '@/components/PuzzleComp.vue';
import { ref } from 'vue';
const initialPuzzleConfig = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15])
const puzzleSolved = () => {
  alert('Congratulations! You solved the puzzle!');
}
</script>

<template>
  <h1>Puzzle view</h1>
  <PuzzleComp :initialConfiguration="initialPuzzleConfig" :onSolveCallback="puzzleSolved" />
</template>