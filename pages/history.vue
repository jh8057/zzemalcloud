<template>
    <div>
        <h1>History</h1>
        <button @click.prevent="printPath">path</button>
        {{ printObj }}
        <nuxt-link to="/">home</nuxt-link>
        <button @click.prevent="doReplaceState">state</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            printObj: { history: false },
        };
    },
    methods: {
        printPath() {
            let path = this.$route.path;
            let history = window.history;
            let state = window.history.state;

            console.log('path', path);
            console.log('history', history);
            console.log('state', state);

            this.printObj = {
                path,
                history,
                state,
            };
        },
        doReplaceState() {
            window.history.replaceState({ class: true }, window.document.title, '/svg');
            this.$router.go(-1);
        },
    },
};
</script>
