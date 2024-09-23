<template>
  <div>
    <h1>User name {{ name }}</h1>
    <p>{{ age +1}}</p>
    <button @click="++count">start</button>
    <h1>{{count}}</h1>
  </div>
</template>
<script>
import { toRefs, reactive } from "vue";
import {ref} from "vue"
export default {
  name: "Bai1",
  setup() {
    const state = reactive({
      name: "xuandat",
      age: 18,
      count:ref(0)
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang=""></style>
