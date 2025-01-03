<template>
  <div>
    <p>Count: {{ count.value }}</p>
    <button @click="count.increment()">+</button>
    <button @click="count.decrement()">-</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Count } from '@/model/count';

const props = defineProps({
  initialCount: Number
});

const count = ref<Count>(new Count(props.initialCount));

</script>