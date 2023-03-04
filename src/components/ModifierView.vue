<template>
  <h1>Form Modifier</h1>
  <input type="text" v-model.trim="data" />
  <p>value: {{ data }}</p>
</template>

<script>
export default {
  name: "ModifierView",
  data() {
    return {
      data: "",
    };
  },
};
</script>
