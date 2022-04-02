<template>
  <div>
    <h1>OpenApi</h1>
    <message></message>
    <hr />
    <h2>NaverSearch</h2>
    <button @click="getNaverSearch">click</button>
    <input v-model="keyword" />
    <hr />
    <ul class="naverSearchResult">
      <li v-for="(item, i) in items" :key="`result_${i}`">
        <span v-html="item.title"></span>
      </li>
    </ul>
    <hr />
    <h2>NaverTrend</h2>
    <div>localhost:3000에서 해야됨</div>
    <button @click="getNaverTrend">trend</button>
    <ul class="naverSearchTrend" v-if="trend">
      <li>{{ trendTitle }}</li>
      <li>{{ trendKeyword }}</li>
      <li v-for="data in trendData" :key="data.period">
        {{ data.period }}//{{ data.ratio }}
      </li>
    </ul>
  </div>
</template>

<script>
import message from "~/components/message.vue";

export default {
  components: {
    message,
  },
  data() {
    return {
      message: "",
      keyword: "",
      items: [],
      trendBody: {
        startDate: "2021-02-01",
        endDate: "2022-04-01",
        timeUnit: "month",
        keywordGroups: [
          {
            groupName: "코로나",
            keywords: ["코로나", "자가키트", "확진자"],
          },
          {
            groupName: "영어",
            keywords: ["영어", "english"],
          },
        ],
        device: "pc",
        ages: ["1", "2"],
        gender: "f",
      },
      trend: {},
    };
  },
  computed: {
    trendTitle() {
      return this.trend.title || "";
    },
    trendKeyword() {
      return this.trend.keywords || [];
    },
    trendData() {
      return this.trend.data || [];
    },
  },
  methods: {
    async getNaverSearch() {
      console.log("start naver search");

      let params = { keyword: this.keyword };
      let result = await this.$axios.$get("/naverSearch/search/blog", {
        params,
      });
      this.items = result.items;

      console.log("result", result);
    },
    async getNaverTrend() {
      console.log("start naver trend");

      let params = { keyword: this.trendBody };
      let result = await this.$axios.$post("/naverSearch/search/trend", params);
      this.trend = result.results[0];
    },
  },
};
</script>
