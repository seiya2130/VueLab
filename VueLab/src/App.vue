<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from './helpers/userCounter';

const { count, increment, decrement } = useCounter(0);

</script>