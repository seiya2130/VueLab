<template>
  <div class="parent">
    <div class="child">aaaaaaaaaaaaaa</div>
    <div>b</div>
    <div>c</div>
  </div>
</template>

<script setup lang="ts">
import ClipBoard from './components/ClipBoard.vue';

</script>
<style
  scoped
  lang="scss"
>
  .parent {
    display: flex;
    width: 100px;
  }
  .child {
   min-width: 0;
   overflow-wrap: break-word;
  }
</style>