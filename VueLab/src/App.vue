<template>
  <div class='box'>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const flg = ref(false);

type PersonKey = keyof Person;

const name: PersonKey = 'name';
const age: PersonKey = 'age';


const person = {
  name: 'Taro',
  age: 20,
}

type Person = typeof person;

const greet = (person: Person) => {
  console.log(`Hello, ${person.name}`);
}

greet(person); // Hello, Taro
</script>
<style scoped> 
.box {
  width: 50vw; /* 画面幅の50% */
  height: 50vh; /* 画面の高さ全体 */
  background : blue;
}
</style>