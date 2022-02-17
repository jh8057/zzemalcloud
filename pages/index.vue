<template>
  <div class="index__wrapper">
    <!-- <header-comp /> -->
    <login-comp />
    <message />
    <footer-one />
    <nuxt-link to="/aboutPage"> GO </nuxt-link>
    <nuxt-link to="/DiaryMain"> Diary </nuxt-link>
    <nuxt-link to="/DbMain"> DB </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import footerOne from "~/components/footerOne.vue";
import HeaderComp from "~/components/headerComp.vue";
import LoginComp from "~/components/LoginComp.vue";
import message from "~/components/message.vue";

export default Vue.extend({
  components: { footerOne, LoginComp, HeaderComp, message },
  name: "IndexPage",
});
</script>
