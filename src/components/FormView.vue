<!-- view -->
<template>
  <h1>Form</h1>
  <input type="text" placeholder="enter name" v-model="name" />
  <input type="password" placeholder="enter password" v-model="password" />
  <button type="submit" @click="handleForm">submit</button>

  <br />
  <br />

  <label for="node">node</label>
  <input type="checkbox" id="node" value="node" v-model="technology" />

  <label for="java">java</label>
  <input type="checkbox" id="java" value="java" v-model="technology" />

  <label for="teacher">teacher</label>
  <input type="radio" id="teacher" value="teacher" name="identify" v-model="identify" />

  <label for="student">student</label>
  <input type="radio" id="student" value="student" name="identify" v-model="identify" />

  <p>{{ technology }}</p>
  <span>{{ identify }}</span>
</template>
tracher tracher tracher

<!-- model -->
<script>
export default {
  name: "FormView",
  data() {
    return {
      name: null,
      password: null,
      technology: [],
      identify: null,
    };
  },
  methods: {
    handleForm() {
      console.log("name: ", this.name);
      console.log("password: ", this.password);
    },
  },
};
</script>
