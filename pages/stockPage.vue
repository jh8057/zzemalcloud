<template>
  <div>
    <h1>Stock</h1>
    <message></message>
    <div>{{ message }}</div>
    <button>click</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import message from "~/components/message.vue";

@Component({
  components: {
    message,
  },
})
@Component
export default class extends Vue {
  message: String = "STOCK";
}
</script>