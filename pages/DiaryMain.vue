<template>
  <div class="DiaryWrapper">
    <nuxt-link to="/" class="navi"><i class="fas fa-angle-left" id="icons" /></i></nuxt-link>

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
  min-height: 96.4vh;
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
}
#icons {
  color: black;
  margin-left: 10px;
  font-size: 50px;
}
.navi {
  position: absolute;
}
</style>