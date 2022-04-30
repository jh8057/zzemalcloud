<template>
  <div class="randomBox">
    <div class="randomBox__contents">
      <transition name="fade" mode="out-in">
        <p v-bind:key="randomName" class="randomBox__contents--text">
          {{ randomName }}
        </p>
      </transition>
      <button @click="randomName">다시 한번 더!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class randomBox extends Vue {
  randomList: Array<String> = ["김", "이", "박"];
  IntervalData: any = null;
  show: boolean = false;
  random3: number = 0;

  mounted() {
    this.makeRandomName();

    //랜덤하게 이름 자동 변경 > 2초마다 변경함수 실행
    this.IntervalData = setInterval(this.makeRandomName, 1000 * 2);
  }

  beforeDestroy() {
    clearInterval(this.IntervalData);
  }

  makeRandomName(): void {
    let random3 = Math.floor(Math.random() * 3);
    if (this.random3 === random3) random3 = (random3 + 1) % 3;
    console.log(random3);
    this.random3 = random3;
  }

  get randomName(): String {
    return this.randomList[this.random3];
  }
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

.fade-enter-active {
  /* 동작과정 */
  animation: slideFromLeft 0.5s;
}
.fade-leave-active {
  /* 동작과정 */
  /* transition: opacity 0.5s; */
  animation: slidetoRight 0.5s;
}
.fade-enter,
.fade-leave-to {
  /* 시작점과 끝점 설정 */
  opacity: 0;
}
@keyframes slideFromLeft {
  from {
    transform: translateX(-20%);
  }
  to {
    transform: translateX(0%);
    opacity: 0.9;
  }
}
@keyframes slidetoRight {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
