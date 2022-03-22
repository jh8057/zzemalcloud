<template>
  <div class="wrapper">
    <p>
      <nuxt-link to="/" class="navi"
        ><i class="fas fa-angle-left" id="icons" /> 홈으로 가기
      </nuxt-link>
    </p>
    <button @click="getAboutData">click</button>
    {{ result }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: "",
    };
  },
  methods: {
    async getAboutData() {
      let result = await this.$axios.$get("/about");
      this.result = result.msg;
    },
  },
};
</script>

<style>
</style>