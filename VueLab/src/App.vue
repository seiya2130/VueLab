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

type Person = {
  name: string;
  age: number;
};

type PersonKey = keyof Person;

const name: PersonKey = 'name';
const age: PersonKey = 'age';
// 型 '"sex"' を型 'keyof Person' に割り当てることはできません。のエラー
const sex: PersonKey = 'sex';


</script>