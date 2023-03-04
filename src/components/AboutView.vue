<template>
  <h1>AboutView</h1>
  <p>My name is : {{ value }}</p>
  <StudentView :getName="getUsers" id="handler" name="sk" />
</template>

<script>
import StudentView from "./StudentView.vue";

export default {
  name: "AboutView",
  components: {
    StudentView,
  },
  date() {
    return {
      value: "",
    };
  },
  methods: {
    getUsers(userName) {
      this.value = userName;
    },
  },
};
</script>
