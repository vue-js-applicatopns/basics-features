<!-- view -->
<template>
  <h1>Form Handler</h1>
  <p>{{ fields }}</p>
  <form @submit.prevent="handleSubmitForm">
    <label for="email">Email:</label>
    <input type="text" v-model="fields.email" id="email" />
    <br />
    <br />
    <label for="password">Password:</label>
    <input type="password" v-model="fields.password" id="password" />
    <br /><br />
    <label for="country">country:</label>
    <select id="country" v-model="fields.country">
      <option>India</option>
      <option>USA</option>
    </select>
    <br />
    <br />
    <label for="Technology">Technology:</label>
    <br />
    <label for="Node">Node:</label>
    <input type="checkbox" value="Node" v-model="fields.technology" id="Node" />
    <br />
    <label for="Java">java:</label>
    <input type="checkbox" value="Java" v-model="fields.technology" id="Java" />

    <br />
    <br />
    <label for="Gender">Gender:</label>
    <br />
    <label for="male">male:</label>
    <input type="radio" value="male" name="Gender" v-model="fields.gender" id="male" />
    <br />
    <label for="female">female:</label>
    <input
      type="radio"
      value="female"
      name="Gender"
      v-model="fields.gender"
      id="female"
    />

    <br />
    <br />
    <button type="submit">submit</button>
  </form>
</template>

<!-- model -->
<script>
export default {
  name: "FormView",
  data() {
    return {
      fields: {
        email: "",
        password: "",
        country: "",
        technology: [],
        gender: "",
      },
      error: [],
    };
  },
  methods: {
    handleSubmitForm() {
      this.error = [];

      for (const item in this.fields) {
        if (this.fields[item] === "" && this.fields[item].length === 0) {
          this.error.push(item);
        }
      }

      if (this.error.length === 0) {
        console.log("submitted");
        return;
      }

      console.error("error", this.error);
    },
  },
};
</script>
