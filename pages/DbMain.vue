<template>
  <div class="dbPage__wrapper">
      <h2>DB Test</h2>
      <button @click="getDbData"> click</button>
      <div>
        {{name}} / {{contents}}
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name : 'no',
      contents : 'no',
    }
  },
  methods:{
    async getDbData(){
      let result = await this.$axios.$get("api/db/users");
      console.log(result)
      this.name = result[0].name
      this.contents = result[0].contents
    },
  }

}
</script>

<style>

</style>