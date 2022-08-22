<script>
import Sheet from '@/components/Sheet.vue'

export default {
	name: 'Home',
	components: {
		Sheet
	},
  data() {
    return {
      nowTab: 'check',
      webAppUrl: process.env.VUE_APP_GOOGLE_WEB_APP_URL
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
    <div class="index__wrapper">
      <div class="toggle-action-bar">
        <button @click="changeTab('check')">查看</button>
        <button @click="changeTab('add')">新增</button>
      </div>
      <div class="result-table">{{ nowTab === 'check' ? '查看' : '新增' }}</div>

      <div v-if="nowTab === 'check'" class="w-100">
        <Sheet />
      </div>

      <div v-else class="mx-auto w-100">
        <form
          method="POST"
          :action="webAppUrl"
          class="d-flex"
        >
          <div class="mr-3">
            <label>姓名</label>
            <input name="Name" type="text" placeholder="Name" required />
          </div>

          <div class="mr-3">
            <label>電話</label>
            <input name="Name" type="text" placeholder="Name" required />
          </div>

          <div class="mr-3">
            <label>Email</label>
            <input name="Name" type="text" placeholder="Name" required />
          </div>

          <div>
            <button type="submit">送出</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.index {
  &__wrapper {
    padding: 10px;
    .toggle-action-bar {
      @include flex($justify-content: flex-end);
      >button {
        margin: 5px;
        padding: 10px 12px;
        background: tomato;
        color: #fff;
        cursor: pointer;
        &:hover {
          background: rgb(192, 63, 40);
        }
      }
    }
    .result-table {
      margin: auto;
      background: lightblue;
      padding: 10px;
      font-size: 25px;
      font-weight: bold;
      @include flex;
    }
  }
}
</style>