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
    <nav>
      <h1>google sheet api demo</h1>
    </nav>

    <main class="container full">
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
