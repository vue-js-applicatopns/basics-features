<template>
  <div>LifeCycleMethod</div>
  <h1>We are implemanting a life cycle hooks {{ value }}</h1>
  <p ref="count">{{ counter }}</p>
  <button @click="counter = counter + 1">click</button>
</template>

<script>
export default {
  name: "LifeCycleMethod",
  data() {
    return {
      value: "Deepakkurmi",
      data: "nem",
      counter: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.value);
  },
  created() {
    // console.log("created", (this.value = "dk"));
  },
  beforeMount() {
    console.log("mounted", (this.value = "dk"));
  },
  mounted() {
    // console.log("mounted", (this.value = "dk"));
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$refs["count"].textContent);
  },
  updated() {
    console.log("updated", this.$refs["count"].textContent);
  },
};
</script>
