<template>
  <template v-if="flg">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>

  <ul>
    <template v-for="item in [1, 2, 3]">
      <li>{{ item }}</li>
    </template>
  </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const flg = ref(false);

</script>