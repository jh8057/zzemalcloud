<template>
    <div class="index__wrapper">
        <login-comp />
        <article class="menu">
            <h1>- Menu -</h1>
            <nuxt-link to="/openApi"> API Page </nuxt-link> <br />
            <nuxt-link to="/DiaryMain"> Diary </nuxt-link> <br />
            <nuxt-link to="/DbMain"> DB </nuxt-link><br />
            <nuxt-link to="/typescript"> typescript </nuxt-link><br />
            <nuxt-link to="/randomPage"> random Word </nuxt-link><br />
            <nuxt-link to="/storePage"> Store </nuxt-link><br />
        </article>
        <footer-one />
    </div>
</template>

<script>
import footerOne from '~/components/footerOne.vue';
import LoginComp from '~/components/LoginComp.vue';

export default {
    components: { footerOne, LoginComp },
};
</script>
