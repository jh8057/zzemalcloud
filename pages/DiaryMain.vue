<template>
  <div class="DiaryWrapper">
    <nuxt-link to="/">BACK</nuxt-link>
    <h1 class="Diary__title">Diary</h1>
    <diary-comp />
  </div>
</template>

<script>
import DiaryComp from "~/components/DiaryComp.vue";
export default {
  components: {
    DiaryComp,
  },
  data() {
    return {};
  },
};
</script>

<style>
.Diary__title {
  text-align: center;
}
.DiaryWrapper {
  height: 100vh;
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
}
</style>