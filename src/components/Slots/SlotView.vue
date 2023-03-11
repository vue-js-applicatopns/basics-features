<template>
  <div>
    <h1>Slot Topic</h1>
    <LayoutView>
      <template #header>
        <p>
          We have learned that components can accept props, which can be JavaScript values
          of any type. But how about template content? In some cases, we may want to pass
          a template fragment to a child component, and let the child component render the
          fragment within its own template.
        </p>
      </template>
    </LayoutView>

    <h1>Todos List</h1>
    <TodoList :api="todoUrl" :pages="pages">
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p>by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </TodoList>
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
