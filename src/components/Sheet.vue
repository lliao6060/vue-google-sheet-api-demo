<template>
	<div class="d-flex w-100 mx-auto">
		<div class="table-responsive col-10">
			<div>
				<ul class="row py-2 px-3 fw-bold">
					<li class="col">Date</li>
					<li class="col">Name</li>
					<li class="col">Phone</li>
					<li class="col">Email</li>
				</ul>
				<div class="row py-2 px-3">
					<ul>
						<li
							v-for="row in rows"
							:key="row.id"
							class="col row"
						>
							<p class="col">{{ row.Date }}</p>
							<p class="col">{{ row.Name }}</p>
							<p class="col">{{ row.Phone }}</p>
							<p class="col">{{ row.Email }}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<a
			:href="linkUrl"
			target="_blank"
			class="d-block col-2 flex-center"
		>View Google Sheet</a>
	</div>
</template>

<script>
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('@/client_secret.json');
	export default {
		name: "Sheet",
		props: ["sheet"],
		data() {
			return {
				rows: [],
				loading: true,
				linkUrl: process.env.VUE_APP_GOOGLE_SHEET_URL,
				sheetId: process.env.VUE_APP_GOOGLE_SHEET_ID
			}
		},
		methods:{
			async accessSpreadSheet() {
				const vm = this;
				const doc = new GoogleSpreadsheet(vm.sheetId);
				await doc.useServiceAccountAuth(creds);
				await doc.loadInfo();
				const sheet = doc.sheetsByIndex[0];
				const rows = await sheet.getRows({
					offset: 1
				})
				vm.rows = rows;
			}
		},
		created() {
			this.accessSpreadSheet();
		}
	}
</script>

<style scoped>

</style>