<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="incrementCounter">カウントをインクリメント</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import type { State } from '@/store/store';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'StoreComponent',
  setup() {
    const store = useStore<State>();

    const counter = computed(() => store.state.counter);
    const doubleCount = computed(() => store.getters.doubleCount);
    const incrementCounter = () => {
      store.commit('increment', { amount: 1 });
    };

    return { counter, doubleCount, incrementCounter };
  },
});
</script>