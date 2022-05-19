<template>
    <div class="random_wrapper">
        <random-box />
        <hr />
        <random-fact />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import randomBox from '~/components/randomBox.vue';
import randomFact from '~/components/randomFact.vue';

@Component
export default class randomPage extends Vue {
    components() {
        randomBox;
        randomFact;
    }

    message: String = 'random';
}
</script>
