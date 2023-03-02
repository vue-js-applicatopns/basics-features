<template>
  <LoolView />
  <ConditionView />
  <FormView />
  <MainView />
</template>

<script>
import MainView from "./components/MainView.vue";
import FormView from "./components/FormView";
import ConditionView from "./components/ConditionView.vue";
import LoolView from "./components/LoolView.vue";

export default {
  name: "App",
  components: {
    LoolView,
    ConditionView,
    FormView,
    MainView,
  },
};
</script>
