<template>
    <div class="useStore">
        <h2>Use Store</h2>
        {{ counter }}
        <button @click="increment">+1</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
// import Vuex, { StoreOptions } from 'vuex';
// Vue.use(Vuex);

// interface State {
//     // 상태값에 대한 인터페이스
//     counter: number;
// }

// const Store: StoreOptions<State> = {
//     state: {
//         // 상태값
//     },
//     mutations: {
//         // 상태 변이 함수
//     },
//     actions: {
//         // 상태 변이를 위한 로직
//     },
//     getters: {
//         // 계산된 값일 반환
//     },
// };

export default Vue.extend({
    computed: {
        ...mapState(['counter']),
    },
    methods: {
        ...mapMutations(['increment']),
    },
    mounted() {
        console.log(this.counter);
    },
});
</script>

<style></style>
