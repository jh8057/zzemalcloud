<template>
  <div class="Diarycomp__wrapper" :style="stylecontents">
    <div class="DiaryComp__head">
      <p class="title">{{ title }}</p>
      <p class="day">{{ RegDate }}</p>
      <p class="icons">{{ icons }}</p>
    </div>
    <div class="DiaryComp__main">
      <p class="DiaryComp__main--contents">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia
        dolorem distinctio rem totam unde voluptatem eius vitae placeat
        consequatur tempore alias, nisi soluta possimus, saepe quidem. Iure,
        inventore nemo.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    RegDate: { type: Number, default: 100 },
    title: { type: String, default: "Diary Contents" },
    icons: { type: String, default: "🍔" },
    contents: { type: Number, default: 100 },
  },
  data() {
    return {
      stylecontents: "background-color : skyblue;",
    };
  },
};
</script>

<style>
.Diarycomp__wrapper {
  width: 100%;
  border-radius: 20px;
}
.DiaryComp__head {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.title,
.day,
.icons,
.DiaryComp__main--contents {
  padding: 10px;
  margin: 0;
}
</style>