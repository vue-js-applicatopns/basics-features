<template>
  <h1>StudentView</h1>
  <button @click="getUsers(userName)">get users</button>
</template>

<script>
export default {
  name: "StudentView",
  props: {
    getUsers: Function,
  },
  data() {
    return {
      userName: "peter",
    };
  },
};
</script>
