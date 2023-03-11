<template>
  <div>ProfileView {{ profile }}</div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "ProfileView",
  data() {
    return {
      profile: "",
    };
  },
  mounted() {
    const route = useRoute();
    this.profile = route.params.name;
  },
};
</script>
