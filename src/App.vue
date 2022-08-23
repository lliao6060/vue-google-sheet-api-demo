<script>
import Index from '@/views/index.vue'

export default {
	name: 'Home',
  components: {
    Index,
  },
}
</script>


<template>
  <div id="app">
    <nav class="bg-violet-300">
      <h1>google sheet api demo</h1>
    </nav>

    <main class="w-full">
      <Index />
    </main>
  </div>
</template>

<style lang="scss">
@import 'scss-reset/_reset.scss';

nav {
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  background: #ddd;
}

main {
  margin: auto;
}
</style>
