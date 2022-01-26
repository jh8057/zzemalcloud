<template>
  <div>
    <login-comp />
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
