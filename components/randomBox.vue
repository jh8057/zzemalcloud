<template>
    <div class="randomBox">
        <div class="randomBox__contents">
            <transition name="fade" mode="out-in">
                <p v-bind:key="randomName" class="randomBox__contents--text">
                    {{ randomName }}
                </p>
            </transition>
            <!-- <button @click="makeRandomName">다시 한번 더!</button> -->
            <button @click="buttonAction">{{ buttonName }}</button>
            <button @click="speedUp">속도 X 2</button>
            <button @click="speedDown">속도 / 2</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Swal from 'sweetalert2';

@Component
export default class randomBox extends Vue {
    randomList: Array<String> = ['김', '이', '박'];
    IntervalData: any = null;
    show: boolean = false;
    random3: number = 0;
    speedNum: number = 2000;

    //buttom
    running: boolean = true;

    // computed
    get randomName(): String {
        return this.randomList[this.random3];
    }

    get buttonName(): String {
        return this.running ? '멈춰!' : '시작!';
    }

    mounted() {
        this.makeRandomName();

        //랜덤하게 이름 자동 변경 > 2초마다 변경함수 실행
        this.IntervalData = setInterval(this.makeRandomName, this.speedNum);
    }

    beforeDestroy() {
        clearInterval(this.IntervalData);
    }

    // methods
    makeRandomName(): void {
        let random3 = Math.floor(Math.random() * 3);
        if (this.random3 === random3) random3 = (random3 + 1) % 3;
        this.random3 = random3;
    }

    buttonAction() {
        if (this.running) {
            this.stopRandom();
        } else {
            this.startRandom();
        }
    }
    stopRandom() {
        this.running = false;
        clearInterval(this.IntervalData);
    }

    speedUp() {
        if (this.speedNum < 500) {
            Swal.fire({
                title: '멈춰!',
                text: '멈췄을 때 나올 성을 맞춰보세요!',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
            return;
        }
        this.speedNum = this.speedNum / 2;
        this.stopRandom();
        this.startRandom();
    }
    speedDown() {
        this.speedNum = this.speedNum * 2;
        this.stopRandom();
        this.startRandom();
    }

    startRandom() {
        this.running = true;
        this.IntervalData = setInterval(this.makeRandomName, this.speedNum);
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
    animation: slideFromLeft 0.2s;
}
.fade-leave-active {
    /* 동작과정 */
    /* transition: opacity 0.5s; */
    animation: slidetoRight 0.2s;
}
.fade-enter,
.fade-leave-to {
    /* 시작점과 끝점 설정 */
    opacity: 0;
}
@keyframes slideFromLeft {
    from {
        transform: translateX(-20%);
        color: gold;
    }
    to {
        transform: translateX(0%);
        opacity: 0.9;
        color: black;
    }
}
@keyframes slidetoRight {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(20%);
        opacity: 0;
    }
}
</style>
