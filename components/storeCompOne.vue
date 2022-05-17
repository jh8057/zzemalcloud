<template>
    <div class="storeCompOne">
        <h2>One</h2>
        <div class="click">
            {{ click }} <button @click="AddClick">+1</button>
            <button @click="minusClick">-1</button>
        </div>
        <div class="pageInfo">page Info : {{ GET_pageInfo }} <button @click="addFrom('One-comp')">from</button></div>
    </div>
</template>

<script lang="ts">
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapState('multi', {
            click: (state: any) => state.click,
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
        }),
    },
};
</script>

<style></style>
