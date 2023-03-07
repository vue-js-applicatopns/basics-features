<template>
  <div class="layout">
    <header>
      <slot name="header" :number="2"></slot>
    </header>
    <main>
      <slot text="greetingMessage" :count="1"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "LayoutView",
};
</script>
