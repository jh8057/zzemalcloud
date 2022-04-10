<template>
  <div class="wrapper">
    <go-home />
    <button @click="getAboutData">click</button>
    {{ result }}
  </div>
</template>

<script>
import goHome from "~/components/goHome.vue";
export default {
  components: {
    goHome,
  },
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
