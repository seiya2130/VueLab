<template>
  <div>
    <button @click="copyToClipboard">Copy to clipboard</button>
    <input ref="input" type="text" v-model="text" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');

const copyToClipboard = () => {
  navigator.clipboard.writeText(text.value);
  navigator.clipboard.readText().then((text) => console.log(text));
};

</script>