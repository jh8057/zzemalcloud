<template>
  <div>
    <h1>OpenApi</h1>
    <message></message>
    <button>click</button>
  </div>
</template>

<script >
import message from "~/components/message.vue";

export default {
  components: {
    message,
  },
  data() {
    return {
      message: "",
    };
  },
};
