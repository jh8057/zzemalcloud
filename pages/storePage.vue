<template>
    <div class="storePage">
        <h1>Store</h1>

        <h2>state</h2>
        {{ click }}
    </div>
</template>

<script lang="ts">
import storeCompOne from '~/components/storeCompOne.vue';
import storeCompTwo from '~/components/storeCompOne.vue';
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
