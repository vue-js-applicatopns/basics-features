<template>
  <div>Users List</div>

  <ul v-for="user in users" :key="user.id">
    <li>
      <p>email: {{ user.email }}</p>
    </li>
  </ul>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";
import api from "@/api";

export default {
  name: "ProfileView",
  data() {
    return {
      profile: "",
      users: [],
    };
  },
  async mounted() {
    const route = useRoute();
    this.profile = route.params.name;

    const response = await axios.get(api.users);
    this.users = response.data.data;
  },
};
</script>
