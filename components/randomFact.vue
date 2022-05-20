<template>
    <div class="UselessFact">
        <h2>randomFact</h2>
        <button @click="getUselessFact">GET</button>
        <span v-if="showUseLessFact" class="UselessFact__result">
            {{ useLessFact }} <br />
            {{ useLessFactKR }}
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            useLessFact: '',
            useLessFactKR: '',
            showUseLessFact: false,
        };
    },
    methods: {
        async getUselessFact() {
            this.showUseLessFact = false;

            let result = await this.$axios.$get('https://uselessfacts.jsph.pl/random.json?language=en');
            this.useLessFact = result.text;
            this.useLessFactKR = await this.papago(this.useLessFact, 'en', 'ko');

            this.showUseLessFact = true;
        },
        async papago(sentence, source, target) {
            let result = await this.$axios.$post('/papago/translate', { sentence, source, target });
            return '번역(파파고) : ' + result.message.result.translatedText;
        },
    },
};
</script>

<style></style>
