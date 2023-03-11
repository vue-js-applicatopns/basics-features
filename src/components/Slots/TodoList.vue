<template>
  <div class="todos">
    <ul>
      <li v-for="item in items" :key="item.id">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  props: {
    api: String,
    pages: Number,
  },
  data() {
    return {
      items: [
        { body: "Scoped Slots Guide", username: "Evan You", likes: 20 },
        { body: "Vue Tutorial", username: "Natalia Tepluhina", likes: 10 },
      ],
    };
  },
};
</script>
