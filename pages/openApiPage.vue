<template>
  <div>
    <h1>OpenApi</h1>
    <message></message>
    <button @click="getNaverSearch">click</button>
  </div>
</template>

<script >
import message from "~/components/message.vue";

export default {
  components: {
    message,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async getNaverSearch(){
      let data = await this.$axios.$get("/naverSearch/search/blog")
      console.log('data',data)
    }
  },
};
