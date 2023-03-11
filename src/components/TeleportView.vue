<template>
  <div>TeleportView</div>

  <button @click="isOpen = true">Opem Mdoel</button>

  <Transition name="slide-fade">
    <p v-if="isOpen">hello</p>
  </Transition>

  <Teleport to="#body">
    <ModelView :show="isOpen" @close="isOpen = false" />
  </Teleport>
</template>
<script>
import ModelView from "./ModelView.vue";

export default {
  name: "TeleportView",
  components: {
    ModelView,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
