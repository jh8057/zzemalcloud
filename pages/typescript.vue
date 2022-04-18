<template>
  <div>
    <h1>Typescript</h1>
    <message></message>
    <div>{{ message }}</div>
    <button>click</button>
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
  message: String = "STOCK";
  answer: Number = this.calculatorMulti(5, 4);

  printHello(): void {
    console.log("HELLO");
  }

  calculatorMulti(a: number, b: number): number {
    return a * b;
  }
}
</script>
