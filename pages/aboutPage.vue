<template>
  <div class="wrapper">
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