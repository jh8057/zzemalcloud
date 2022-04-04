<template>
  <div class="container">
    <div class="login-area">
      <div id="button_area">
        <div id="naverIdLogin"></div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/server/config/config";

export default {
  head: {
    script: [
      { src: "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js" },
    ],
  },
  mounted() {
    this.login();
  },
  methods: {
    login() {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: config.ClientID,
        callbackUrl: "http://127.0.0.1:3000",
        loginButton: { color: "green", type: 3, height: 40 },
      });

      naverLogin.init();
      naverLogin.getLoginStatus(function (status) {
        if (status) {
          const nickName = naverLogin.user.getNickName();
          const age = naverLogin.user.getAge();

          if (nickName === null || nickName === undefined) {
            console.log("별명이 필요합니다. 정보제공을 동의해주세요.");
            naverLogin.reprompt();
            return;
          } else {
            console.log("Login Success!");
            console.log("name", nickName);
            console.log("age", age);
          }
        }
      });
    },
    setLoginStatus() {
      const logout = document.getElementById("btn_logout");
      logout.addEventListener("click", (e) => {
        naverLogin.logout();
        location.replace("http://127.0.0.1:3000");
      });
    },
  },
};
</script>

<style></style>
