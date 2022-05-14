<template>
    <div class="storePage">
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
        ...mapState(['multi/click']),
    },
};
</script>

<style></style>
