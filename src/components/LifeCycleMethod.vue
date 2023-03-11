<template>
  <div>LifeCycleMethod</div>
  <h1>We are implemanting a life cycle hooks</h1>
</template>

<script>
export default {
  name: "LifeCycleMethod",
  data() {
    console.warn("define data properties");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
};
</script>
