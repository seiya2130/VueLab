<template>
  <Counter :initial-count='num1'></Counter>
  <Counter :initial-count='num2'></Counter>
</template>

<script setup lang="ts">
import Counter from './Counter.vue';

const num1 = 100;
const num2 = 200;

</script>