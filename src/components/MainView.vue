<template>
  <h1>Functions calling</h1>
  <button @click="count--">Increament</button>
  <button @click="count++">Decreament</button>
  <p>count : {{ count }}</p>
  <button v-on:click="getConsole()">console click</button>
  <input type="text" v-model="name" />
  <p>{{ name }}</p>
  <!-- <InfoView :info="Info" :player="player" :getConsole="getConsole" /> -->

  <ul>
    <li v-for="item in userProfile" :key="item.id">
      <UserView :item="item" :getConsole="getConsole" />
    </li>
  </ul>
</template>

<script>
// import InfoView from "./InfoView.vue";
import UserView from "./User.vue";

export default {
  name: "MainView",
  components: {
    // InfoView,
    UserView,
  },
  data() {
    return {
      count: 0,
      player: "Virat",
      Info: {
        name: "deepak kurmi",
        collage: "sirte",
      },
      userProfile: [
        {
          id: 1,
          name: "dk",
        },
        {
          id: 2,
          name: "sk",
        },
        {
          id: 3,
          name: "pk",
        },
      ],
    };
  },
  methods: {
    Increament() {
      this.count = this.count - 1;
    },
    Decreament() {
      this.count = this.count + 1;
    },
    getConsole(id) {
      console.log(id);
    },
  },
};
</script>
