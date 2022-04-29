<template>
  <div class="randomBox">
    <div class="randomBox__contents">
      <p class="randomBox__contents--text">{{ randomWord }}</p>
      <button @click="randomName">다시 한번 더!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class randomBox extends Vue {
  randomWord: String = "";
  randomList: Array<String> = ["김", "이", "박"];
  IntervalData: any = null;

  mounted() {
    this.randomName();

    //랜덤하게 이름 자동 변경 > 2초마다 변경함수 실행
    this.IntervalData = setInterval(this.randomName, 1000 * 2);
  }

  beforeDestroy() {
    clearInterval(this.IntervalData);
  }

  randomName(): void {
    const random3 = Math.floor(Math.random() * 3);
    this.randomWord = this.randomList[random3];
  }
  //랜덤하게 이름 자동 변경
  // 버튼 누면 멈추게 -> 룰렛?
}
</script>

<style>
.randomBox {
  width: 30vh;
  height: 80vh;
  display: flex;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.randomBox__contents--text {
  font-size: 100px;
}
</style>
