<template>
    <div class="storeCompOne">
        <h2>One</h2>
        <div class="click">
            {{ click }} <button @click="AddClick">+1</button>
            <button @click="minusClick">-1</button>
        </div>
        <div class="pageInfo">page Info : {{ GET_pageInfo }} <button @click="addFrom('One-comp')">from</button></div>
        <p>Number : {{ num }}</p>
        <ul class="numList">
            <li v-for="n in 10" :key="n">
                <button @click="clickNum(n)">{{ n }}</button>
            </li>
        </ul>
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

<style></style>
