<template>
  <h1>Dynamic Components</h1>
  <button @click="tab = 'NodeCom'">Node</button>
  <button @click="tab = 'JavaCom'">Java</button>
  <button @click="tab = 'PhpCom'">PHP</button>

  <component :is="tab" />
</template>

<script>
import NodeCom from "./NodeCom.vue";
import JavaCom from "./JavaCom.vue";
import PhpCom from "./PhpCom.vue";

export default {
  name: "DynamicCom",
  components: {
    NodeCom,
    JavaCom,
    PhpCom,
  },
  data() {
    return {
      tab: "NodeCom",
    };
  },
};
</script>
