<template>
  <h1>Class Binding</h1>
  <p :class="applyCss">Learning class binding</p>
  <button
    @click="
      {
        isSubmit = !isSubmit;
      }
    "
  >
    change class
  </button>
</template>

<script>
export default {
  name: "ClassBind",
  data() {
    return {
      isSubmit: true,
    };
  },
  computed: {
    applyCss() {
      return {
        theme: this.isSubmit,
        error: this.isSubmit,
      };
    },
  },
};
</script>

<style scoped>
.theme {
  background-color: rgb(0, 81, 255);
}

.error {
  color: red;
}
</style>
