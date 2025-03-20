<template>
  <ClipBoard />
</template>

<script setup lang="ts">
import Parent from './components/Parent.vue';
import ClipBoard from './components/ClipBoard.vue';


const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  // getMonth() は 0〜11 なので、+1 して正しい月に変換
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const date = new Date();
console.log(formatDate(date));

</script>