<template>
    <div class="useStore">
        <h2>Use Store</h2>
        {{ counter }}
        <button @click="increment">+1</button>
        <button @click="doIncrement">+1</button>
        <button @click="decrement">-1</button>
        {{ getArrN }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
// import Vuex, { StoreOptions } from 'vuex';

// interface State {
//     // 상태값에 대한 인터페이스
//     counter: number;
// }

export default Vue.extend({
    computed: {
        ...mapState(['counter']),
        ...mapGetters({
            // map `this.$store.getters.doneTodosCount`
            getArrN: 'getArrNumber',
        }),
    },
    methods: {
        ...mapMutations(['increment', 'decrement']),
        ...mapActions({
            doIncrement: 'increment',
        }),
    },
    mounted() {
        console.log(this.counter);
    },
});
</script>

<style></style>
