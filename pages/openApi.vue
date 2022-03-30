<template>
  <div>
    <h1>OpenApi</h1>
    <message></message>
    <hr>
    <h1>NaverLogin</h1>
    <button @click="getNaverSearch">click</button>
    <input v-model="keyword" /> 
    <hr>
    <ul class="naverSearchResult">
      <li v-for="(item,i) in items" :key="`result_${i}`" >
        <span v-html="item.title"></span>
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
      keyword : '',
      items: [],
    };
  },
  computed:{
    searchResult(){
      return this.items
    }
  },
  methods: {
    async getNaverSearch(){
      console.log('start naver')
      
      let params = { keyword : this.keyword}
      let result = await this.$axios.$get("/naverSearch/search/blog", {params})
      this.items = result.items

      console.log('result',result)
      
    }
  },
};

</script>
