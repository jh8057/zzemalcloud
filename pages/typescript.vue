<template>
  <div>
    <h1>Typescript</h1>
    <message></message>
    <button @click="calculatorMulti">click</button>
    <button @click="printHello">printHello</button>
    <div>{{ answer }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import message from "~/components/message.vue";

@Component({
  components: {
    message,
  },
})
@Component
export default class extends Vue {
  answer: Number = 0;

  printHello(): void {
    console.log("HELLO");
  }

  calculatorMulti(a: number, b: number): number {
    this.answer = a * b;
    return a * b;
  }
}
</script>
