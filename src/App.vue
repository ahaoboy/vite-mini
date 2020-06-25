<template>
  <h1>hello vite aa asasa</h1>
  <h2>
<!--    <span>count is abcd {{count}}, double is {{double}}</span>-->
<!--    <button @click="add">add</button>-->
<!--    <span>random is {{random}}</span>-->
<!--    <button @click="refresh">refresh</button>-->
  </h2>
</template>

<script>
  import {ref, computed} from 'vue'
  import _random from 'lodash/random'

  export default {
    setup() {
      const count = ref(0)
      const random = ref(0)

      function add() {
        count.value++
      }

      const double = computed(() => count.value * 2)
      const refresh = () => random.value = _random(0, 100)
      return {count, add, double, random, refresh}
    }
  }
</script>
