<template>
    <div>
        <h1>Typescript</h1>
        <message></message>
        <input v-model="var1" /> *
        <input v-model="var2" />
        <button @click="calculatorMulti">click</button>
        <button @click="printHello">printHello</button>
        <div>{{ answer }}</div>

        <qr-code />

        <hr />
        <h2>Store</h2>
        <use-store />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import message from '~/components/message.vue';
import QrCode from '~/components/QrCode.vue';
import UseStore from '~/components/UseStore.vue';

@Component({
    components: {
        message,
        QrCode,
        UseStore,
    },
})
@Component
export default class extends Vue {
    answer: number = 0;
    var1: number = 0;
    var2: number = 0;

    printHello(): void {
        console.log('HELLO');
    }

    calculatorMulti(a: number, b: number): number {
        if (isNaN(this.var1) || isNaN(this.var2)) {
            alert('input Number!');
            return 0;
        }
        this.answer = this.var1 * this.var2;
        return a * b;
    }
}
</script>
