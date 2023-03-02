<template>
  <h1>AboutView</h1>
  <p>user name: {{ user }}</p>
  <p>myName: {{ myName }}</p>
</template>

<script>
export default {
  name: "AboutView",
  date() {
    return {
      myName: "Deepak kurmi",
    };
  },

  methods: {
    getUsers(userName) {
      console.log(userName);
      this.user = userName;
    },
  },
};
</script>
