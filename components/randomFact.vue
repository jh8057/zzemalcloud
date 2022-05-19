<template>
    <div>
        <h2>randomFact</h2>
        <button @click="getUselessFact">GET</button>
        {{ useLessFact }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            useLessFact: '',
        };
    },
    methods: {
        async getUselessFact() {
            let result = await this.$axios.$get('https://uselessfacts.jsph.pl/random.json?language=en');
            this.useLessFact = result.text;
        },
    },
};
</script>

<style></style>
