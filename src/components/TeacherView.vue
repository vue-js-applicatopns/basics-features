<template>
  <h1>TeacherView</h1>
  <p>My name is : {{ name }}</p>
</template>

<script>
export default {
  name: "TeacherView",
  props: {
    name: String,
  },
};
</script>
