<template>
  <router-link to="/">Home</router-link><br />
  <router-link to="/slot">Slot</router-link><br />
  <router-link to="/profile/deepak">deepak</router-link><br />
  <router-link to="/profile/virat">virat</router-link><br />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>
