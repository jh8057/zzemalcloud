<template>
    <div class="storePage">
        <h1>store</h1>
        <store-comp-one />
        <hr />
        <store-comp-two />
    </div>
</template>

<script lang="ts">
import storeCompOne from '~/components/storeCompOne.vue';
import storeCompTwo from '~/components/storeCompTwo.vue';
import { mapState } from 'vuex';
export default {
    components: {
        storeCompOne,
        storeCompTwo,
    },
    computed: {
        ...mapState('multi', {
            //type
            click: (state: any) => state.click,
        }),
    },
};
</script>

<style></style>
