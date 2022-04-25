<template>
  <div class="randomBox">
    {{ randomWord }}
    <button @click="randomName">다시 한번 더!</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class randomBox extends Vue {
  randomWord: String = "";
  randomList: Array<String> = ["김", "이", "박"];

  mounted() {
    this.randomName();
  }
  randomName() {
    const random3 = Math.floor(Math.random() * 3);
    this.randomWord = this.randomList[random3];
  }
}
</script>

<style></style>
