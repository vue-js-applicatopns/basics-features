<template>
  <div class="todos"></div>
</template>
<script>
export default {
  name: "TodoList",
  props: {
    api: String,
    pages: Number,
  },
  data() {
    return {
      Items: [],
    };
  },
  computed: {},
};
</script>
