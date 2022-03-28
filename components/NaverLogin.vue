<template>
<div>
    <h1>NaverLogin</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
        async requestLogin(){
            let data =  await this.$axios.$get('https://nid.naver.com/oauth2.0/authorize')
        }
    },
}
</script>

<style>

</style>