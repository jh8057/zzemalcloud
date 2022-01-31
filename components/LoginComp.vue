<template>
  <div class="LoginWrapper">
    <fieldset>
      ID : <input class="input" placeholder="아이디" v-model="memID"> <br>
      PW : <input class="input" placeholder="비밀번호" type="password" v-model="memPW">
    </fieldset>
    <button @click="login">Login</button>
    <button @click="tokenCheck">Check</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      memID : "",
      memPW : "",
    };
  },
  methods: {
    async login() {
      const params = {
        memID: this.memID,
        // memPW: this.memPW,
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