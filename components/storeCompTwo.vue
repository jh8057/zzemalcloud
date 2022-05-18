<template>
    <div class="storeCompTwo">
        <h2>Two</h2>
        <div class="click">
            {{ click }} <button @click="AddClick">+1</button>
            <button @click="minusClick">-1</button>
        </div>
        <div class="pageInfo">page Info : {{ GET_pageInfo }} <button @click="addFrom('Two-comp')">from</button></div>
        <div>
            <p>Number : {{ num }}</p>
            <ul class="numList">
                <li v-for="n in [10, 11, 12, 13, 14, 15]" :key="n">
                    <button @click="clickNum(n)">{{ n }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapState('multi', {
            click: (state: any) => state.click,
            num: (state: any) => state.num,
        }),
        ...mapGetters('multi', {
            GET_pageInfo: 'GET_pageInfo',
        }),
    },
    methods: {
        ...mapActions('multi', {
            AddClick: 'AddClick',
            minusClick: 'minusClick',
            addFrom: 'addFrom',
            clickNum: 'clickNum',
        }),
    },
};
</script>

<style>
.numList {
    display: flex;
    width: 400px;
    list-style: none;
    justify-content: space-between;
}
</style>
