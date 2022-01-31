<template>
  <div>
    <header-comp />
    <login-comp />
    <footer-one />
    <nuxt-link to="/aboutPage"> GO </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import footerOne from "~/components/footerOne.vue";
import HeaderComp from "~/components/headerComp.vue";
import LoginComp from "~/components/LoginComp.vue";

export default Vue.extend({
  components: { footerOne, LoginComp, HeaderComp },
  name: "IndexPage",
});
</script>
