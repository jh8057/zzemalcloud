<template>
  <div class="LoginWrapper">
    <fieldset>
      <legend>환영합니다🍰</legend>
      I D : <input class="input" placeholder="아이디" v-model="memID" />
      <br />
      PW:
      <input
        class="input"
        placeholder="비밀번호"
        type="password"
        v-model="memPW"
      />
      <!-- <button type="submit" @click="">Login</button> -->
      <a @click="login">Login</a>
    </fieldset>
    <p>HINT : U BirthDay / J BirthDay</p>
    <button @click="tokenCheck">Check</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      memID: "",
      memPW: "",
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
legend {
  margin: 0;
  width: 40vh;
  justify-content: center;
  text-align: center;
  background-color: rgb(29, 65, 0);
  color: #fff;
  padding: 3px 6px;
}
fieldset > a {
  margin-left: 5px;
  position: relative;
  top: -10px;
  background-color: rgb(37, 59, 46);
  padding: 10px;
  color: white;
}
</style>