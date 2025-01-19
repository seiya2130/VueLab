<template>
    <div>
      <Child />
    </div>
  </template>

<script setup lang="ts">
import Child from './Child.vue';

</script>
  
<style scoped>
/* 子コンポーネントのcolorクラスを使った場合の色は赤になる */
:deep(.color) {
    color: red;
}
</style>