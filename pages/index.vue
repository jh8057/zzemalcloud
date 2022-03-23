<template>
  <div class="index__wrapper">
    <login-comp />

    <nuxt-link to="/stockPage"> Stock Page </nuxt-link> <br />
    <nuxt-link to="/aboutPage"> About Page </nuxt-link> <br />
    <nuxt-link to="/DiaryMain"> Diary </nuxt-link> <br />
    <nuxt-link to="/DbMain"> DB </nuxt-link><br />
    <footer-one />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import footerOne from "~/components/footerOne.vue";
import LoginComp from "~/components/LoginComp.vue";

export default Vue.extend({
  components: { footerOne, LoginComp },
  name: "IndexPage",
});
</script>
