<script>
import Sheet from '@/components/Sheet.vue'
import FormTable from '@/components/FormTable.vue'

export default {
	name: 'Home',
	components: {
		Sheet,
    FormTable
	},
  data() {
    return {
      nowTab: 'check',
      linkUrl: process.env.VUE_APP_GOOGLE_SHEET_URL,
      webAppId: process.env.VUE_APP_GOOGLE_WEB_APP_ID
    }
  },
  methods: {
    changeTab(tabName) {
      this.nowTab = tabName
    },
  },
}
</script>

<template>
  <div class="index w-100">
    <div class="index__wrapper py-4 px-4">
      <div class="toggle-action-bar flex items-center justify-end">
        <a
          :href="linkUrl"
          target="_blank"
          class="w-40 bg-sky-600 py-2 px-2 mr-3 text-center text-white hover:bg-sky-700 text-sm font-bold rounded-md"
        >View Google Sheet</a>
        <button
          @click="changeTab('check')"
          class="btn-red"
          :class="{ ['bg-red-600']: nowTab === 'check' }"
        >查看</button>
        <button
          @click="changeTab('add')"
          class="btn-red"
          :class="{ ['bg-red-600']: nowTab === 'add' }"
        >新增</button>
      </div>
      <div class="bg-sky-200 py-3 text-center text-xl font-bold">{{ nowTab === 'check' ? '查看' : '新增' }}</div>

      <template v-if="nowTab === 'check'">
        <Sheet />
      </template>

      <template v-else>
        <FormTable />
      </template>
    </div>
  </div>
</template>

<style lang="scss">
// .index {
//   &__wrapper {
//     .toggle-action-bar {
//       @include flex($justify-content: flex-end);
//     }
//   }
// }
</style>