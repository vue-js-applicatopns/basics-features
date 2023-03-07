<template>
  <div>
    <h1>Slot</h1>
    <LayoutView>
      <template #header="slotProps">
        <p>header</p>
        <h1>{{ slotProps.number }}</h1>
      </template>
      <template #default="{ text, count }">
        <p>{{ text }} {{ count }}</p>
      </template>
    </LayoutView>

    <h1>Todos List</h1>
    <TodoList :api="todoUrl" :pages="pages"></TodoList>
  </div>
</template>

<script>
import LayoutView from "./LayoutView.vue";
import TodoList from "./TodoList.vue";
import api from "../../api";

export default {
  name: "SlotView",
  data() {
    return {
      todoUrl: api.todos,
      pages: 10,
    };
  },
  components: {
    LayoutView,
    TodoList,
  },
};
</script>
