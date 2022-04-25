<template>
  <div class="random_wrapper">
    <random-box />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import randomBox from "~/components/randomBox.vue";

@Component
export default class randomPage extends Vue {
  components() {
    randomBox;
  }

  message: String = "random";
}
</script>
