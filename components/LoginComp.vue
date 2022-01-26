<template>
  <div class="LoginWrapper">
    <button @click="login">Login</button>
    <button @click="tokenCheck">Check</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
    };
  },
  methods: {
    async login() {
      const params = {
        memID: "user05",
      };
      let result = await this.$axios.$post("api/user/login", params);
      console.log(result);
      this.token = result.token;
    },
    async tokenCheck() {
      const params = {
        token: this.token,
      };
      let result = await this.$axios.$get("api/user/tokenCheck", { params });
      console.log(result);
      this.token = result.token;
    },
  },
};
</script>

<style>
</style>