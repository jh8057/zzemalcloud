<template>
  <div>
    <input type="text" v-model="message" />
    <span v-if="message">{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Message extends Vue {
  message: String = "this is mesg";
}
</script>
