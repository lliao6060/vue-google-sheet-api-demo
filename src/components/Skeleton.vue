<script>
export default {
	name: 'Skeleton',
  data() {
    return {
      webAppId: process.env.VUE_APP_GOOGLE_WEB_APP_ID
    }
  },
}
</script>


<template>
  <div class="border border-blue-300 shadow rounded-md p-4 w-full h-full">
    <div
      v-for="(item) in 5"
      :key="item"
      class="animate-pulse flex space-x-4">
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>