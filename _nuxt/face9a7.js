(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{485:function(t,n,e){"use strict";e.r(n);e(33),e(97);var o=e(300),l=e.n(o),c={head:{script:[{src:"https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"}]},mounted:function(){this.login()},methods:{login:function(){var t=new naver.LoginWithNaverId({clientId:l.a.ClientID,callbackUrl:"http://127.0.0.1:3000",loginButton:{color:"green",type:3,height:40}});t.init(),t.getLoginStatus((function(n){if(n){var e=t.user.getNickName(),o=t.user.getAge();if(null==e)return console.log("별명이 필요합니다. 정보제공을 동의해주세요."),void t.reprompt();console.log("Login Success!"),console.log("name",e),console.log("age",o)}}))},setLoginStatus:function(){document.getElementById("btn_logout").addEventListener("click",(function(t){naverLogin.logout(),location.replace("http://127.0.0.1:3000")}))}}},r=e(62),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"login-area"},[n("div",{attrs:{id:"button_area"}},[n("div",{attrs:{id:"naverIdLogin"}})])])])}],!1,null,null,null);n.default=component.exports}}]);