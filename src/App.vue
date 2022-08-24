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
    <nav class="bg-violet-300 text-xl font-bold py-5 px-5">
      <h1>google sheet api demo</h1>
    </nav>

    <main class="w-full mx-auto">
      <Index />
    </main>
  </div>
</template>

<style lang="scss">
@import 'scss-reset/_reset.scss';
</style>
