<script>
export default {
	name: 'FormTable',
  data() {
    return {
      webAppId: process.env.VUE_APP_GOOGLE_WEB_APP_ID,
      buttonClicked: false,
      customFormObj: [
        {
          name: 'Name',
          value: 'name',
        },
        {
          name: 'Phone',
          value: 'phone',
        },
        {
          name: 'Content',
          value: 'content',
        },
      ],
      customForm: {
        name: '',
        phone: '',
        content: '',
      }
    }
  },
  methods: {
    handleCheckForm(e) {
      const vm = this;
      const resultForm = []
      vm.buttonClicked = true
      Object.entries(vm.customForm).forEach(([key]) => {
        resultForm.push(vm.customForm[key] !== '')
      })

      const result = resultForm.every((item) => item === true)
      if(result) {
        vm.buttonClicked = true
        vm.handleSubmit(e)
      } else {
        vm.buttonClicked = false
      }
    },
    handleResetForm() {
      const vm = this;
      Object.entries(vm.customForm).forEach(([key]) => {
        vm.customForm[key] = ''
      })
    },
    async handleSubmit(e) {
      e.preventDefault()
      const vm = this;
      const { name, phone, content } = vm.customForm
      const script_url = `https://script.google.com/macros/s/${vm.webAppId}/exec`
      const url = `${script_url}?callback=ctrlq&Name=${name}&Phone=${phone}&Content=${content}&action=insert`;
      try {
        const res = await vm.$axios.post(url)
        if(res) {
          console.log(res)
          vm.buttonClicked = false
          vm.$swal({
            icon: 'success',
            title: '成功送出!',
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (err) {
        console.log(err)
      }
      vm.handleResetForm()
    },
  },
}
</script>


<template>
  <div class="form-table my-3 w-75">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">add new data to google sheet</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="form-table-header">Name</th>
                  <th class="form-table-header">Phone</th>
                  <th class="form-table-header">Content</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    v-for="(formItem, i) in customFormObj"
                    :key="`${formItem.value}-${i}`"
                    class="form-table-content"
                    :class="{ 'cursor-not-allowed': buttonClicked }"
                  >
                    <input
                      id="form-name"
                      :name="formItem.name"
                      type="text"
                      :placeholder="formItem.value"
                      required
                      class="form-input"
                      v-model="customForm[formItem.value]"
                      :disabled="buttonClicked"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center w-full my-5">
      <button
        class="relative bg-gray-900 hover:bg-gray-600 text-white text-center text-md outline-none uppercase tracking-widest py-3 px-5 leading-4 transition-all duration-500 ease-in-out rounded-full cursor-pointer"
        :class="{ 'pr-8 pl-4': buttonClicked }"
        @click="handleCheckForm"
      >
        送出
        <span
          class="loader animation-spin h-3 w-3 bg-transparent absolute opacity-0 box-border transition-all duration-500 ease-in-out mx-auto rounded-full"
          :class="{ 'opacity-100': buttonClicked }"
        >
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  right: 0.875rem;
  top: 50%;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-right: 2px solid rgba(#fff, 0.35);
}

.animation-spin {
  animation-name: spin;
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>