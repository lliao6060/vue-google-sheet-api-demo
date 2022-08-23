<template>
	<div class="grid gap-4 my-3">
		<div class="flex justify-center text-white">
		</div>
    <div class="container mx-auto px-4 sm:px-8">
      <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
									<th class="form-table-header">Date</th>
                  <th class="form-table-header">Name</th>
                  <th class="form-table-header">Phone</th>
                  <th class="form-table-header">Content</th>
                </tr>
              </thead>
              <tbody>
								<template v-if="!loading">
									<tr
										v-for="row in rows"
										:key="row.id"
									>
										<td class="form-table-content border-dashed border-t border-gray-200">{{ row.Date }}</td>
										<td class="form-table-content border-dashed border-t border-gray-200">{{ row.Name }}</td>
										<td class="form-table-content border-dashed border-t border-gray-200">{{ row.Phone }}</td>
										<td class="form-table-content border-dashed border-t border-gray-200">{{ row.Content }}</td>
									</tr>
								</template>
              </tbody>
            </table>
						<Skeleton v-if="loading"/>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('@/client_secret.json');
import Skeleton from './Skeleton.vue'

	export default {
		name: "Sheet",
		props: ["sheet"],
		components: {
			Skeleton,
		},
		data() {
			return {
				rows: [],
				loading: false,
				sheetId: process.env.VUE_APP_GOOGLE_SHEET_ID
			}
		},
		methods:{
			async accessSpreadSheet() {
				const vm = this;
				const doc = new GoogleSpreadsheet(vm.sheetId);
				vm.loading = true
				await doc.useServiceAccountAuth(creds);
				await doc.loadInfo();
				const sheet = doc.sheetsByIndex[0];
				const rows = await sheet.getRows({
					offset: 1
				})
				if(rows) {
					vm.rows = rows;
					vm.loading = false
				}
			}
		},
		created() {
			this.accessSpreadSheet();
		}
	}
</script>

<style lang="scss" scoped>
</style>