<template>
  <div>Users List</div>

  <ul v-for="user in users" :key="user.id">
    <li>
      <p>email: {{ user.email }}</p>
    </li>
  </ul>
  <button @click="show = !show">Toggle</button>

  <Transition name="slide-fade">
    <p v-if="show">hello</p>
  </Transition>
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
      show: false,
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

<style scoped>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s  cubic-bezier(1,0.5,1,1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(10px);
  opacity:0;
}



</style>
