<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{ message }}</div>
  </div>
</template>

<script>
import Vue from "vue/types/umd";

export default class Message extends Vue {
  message: String = "메세지를 입력해주세요";
}
</script>

<style>
</style>