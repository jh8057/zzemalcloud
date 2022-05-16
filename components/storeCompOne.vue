<template>
    <div class="storeCompOne">
        <h2>One</h2>
        {{ click }}
    </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('multi', {
            click: (state: any) => state.click,
        }),
    },
};
</script>

<style></style>
