<template>
	<div class="">
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-copy"></i>
					Home >> Projects
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!-- 几个tab页的内容在这里 -->
		<el-tabs type="border-card">
			<el-tab-pane label="Projects Overview">
				<!-- TAB OVERALL STARTS -->
				<!-- 总览图的Tab页面 -->
				<com-bar1></com-bar1>
				<!-- TAB OVERALL ENDS -->
			</el-tab-pane>
			<el-tab-pane label="View Star3" class="project-1">
				<el-row :gutter="30">
					<el-col :span="16">
						<div class="bar-container">
							<h2>Actual Cost vs. Projection</h2>
							<h5>Total: {{ total }}</h5>
							<div ref="echarts0" class="chartContain"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<h2>Data Factors:</h2>
						<div style="margin: 20px"></div>

						<el-form label-position="Right" label-width="110px" :model="barData" ref="bardataForm">
							<el-form-item label="labourQty">
								{{ barData.labourQty }}
								<el-button type="primary" @click="changeLabourSide = true">Change</el-button>
							</el-form-item>
							<el-form-item label="engineeringQty">
								<el-input v-model="barData.engineeringQty" style="width: 60px"></el-input>
							</el-form-item>
							<el-form-item label="hardcostQty">
								<el-input v-model="barData.hardcostQty" style="width: 60px"></el-input>
							</el-form-item>
							<el-form-item label="softcostQty">
								<el-input v-model="barData.softcostQty" style="width: 60px"></el-input>
							</el-form-item>
							<el-form-item label="financingQty">
								<el-input v-model="barData.financingQty" style="width: 60px"></el-input>
							</el-form-item>

							<el-form-item>
								<el-button type="primary" @click="handleBarDataChange">Submit</el-button>
							</el-form-item>
						</el-form>
						<h5>Total:{{ total }}</h5>
					</el-col>
				</el-row>
			</el-tab-pane>
			<el-tab-pane label="Lamp Lighter">TODO - PROJECT TWO</el-tab-pane>
			<el-tab-pane label="Linesight">TODO - PROJECT THREE</el-tab-pane>
		</el-tabs>

		<!-- 改变数量的侧边栏目 -->
		<el-drawer title="Edit the Labourer Cost" :visible.sync="changeLabourSide" direction="rtl" size="40%">
			<el-table :data="gridData">
				<el-table-column property="name" label="Labourer Type" width="210"></el-table-column>
				<el-table-column label="Actual Cost(CAD)">
					<template slot-scope="scope">
						<el-input v-model="scope.row.actualCost" placeholder="Enter Actual Cost"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="Forecast Cost(CAD)">
					<template slot-scope="scope">
						<el-input v-model="scope.row.forecastCost" placeholder="Enter Forecast Cost"></el-input>
					</template>
				</el-table-column>
			</el-table>
			{{totalActualCost}}
			{{ totalForecastCost }}
			
			
		</el-drawer>
	</div>
</template>

<script>
import * as echarts from 'echarts';
import ComBar1 from '../common/CBar-1.vue';
export default {
	name: 'tabs',
	data() {
		return {
			changeLabourSide: false,
			chart0: null,
			barData: {
				labourQty: 500,
				engineeringQty: 2000,
				hardcostQty: 4600,
				softcostQty: 1000,
				financingQty: 1200
			},
			option0: {
				title: {
					text: ''
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						// Use axis to trigger tooltip
						type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
					}
				},
				legend: {
					data: ['Actual Cost', 'Projection']
				},
				xAxis: {
					type: 'category',
					data: ['Labourer', 'Engineering', 'Hard Cost', 'Soft Cost', 'Financing']
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						formatter: '${value}' // Formats the y-axis labels to show a dollar sign
					}
				},
				series: [
					{
						name: 'Actual Cost',
						type: 'bar',
						data: [500, 2000, 4600, 1000, 1200],
						stack: 'total',
						label: {
							show: true
						}
					},
					{
						name: 'Projection',
						type: 'bar',
						stack: 'total',
						data: [1000, 1000, 1000, 1000, 1000],
						label: {
							show: true
						}
					}
				]
			},
			gridData: [
				{ name: 'Electrical', actualCost: 1500, forecastCost: null },
				{ name: 'Mechanical', actualCost: 2300, forecastCost: null },
				{ name: 'Concrete', actualCost: 3600, forecastCost: null },
				{ name: 'Installation', actualCost: 200, forecastCost: null },
				{ name: 'General Labourer', actualCost: 3300, forecastCost: null },
				{ name: 'Finishing', actualCost: 4500, forecastCost: null },
				{ name: 'Carpenter', actualCost: 3200, forecastCost: null },
				{ name: 'Masonry', actualCost: 400, forecastCost: null }
			]
		};
	},
	methods: {
		handleBarDataChange() {
			var newData = [
				this.barData.labourQty,
				this.barData.engineeringQty,
				this.barData.hardcostQty,
				this.barData.softcostQty,
				this.barData.financingQty,
				this.barData.socksQty
			];
			console.log('NEW data is:', newData);
			this.option0.series[0].data = newData;
			this.chart0.setOption(this.option0);
		},
		getData0() {
			this.chart0 = echarts.init(this.$refs.echarts0);
			this.chart0.setOption(this.option0);
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	},
	mounted() {
		this.getData0();
		//console.log(this.totalActualCost,"TOTAL");
	},
	computed: {
		total: function () {
			return (
				parseInt(this.barData.labourQty) +
				parseInt(this.barData.financingQty) +
				parseInt(this.barData.hardcostQty) +
				parseInt(this.barData.softcostQty) +
				parseInt(this.barData.engineeringQty)
			);
		},
		totalActualCost() {
			// Calculate the total actual cost
			return this.gridData.reduce((total, person) => total + (person.actualCost || 0), 0);
		},
		totalForecastCost() {
			// Calculate the total forecast cost
			return this.gridData.reduce((total, person) => total + (person.forecastCost || 0), 0);
		}
	},
	components: {
		ComBar1
	}
};
</script>

<style scoped>
.project-1 {
	padding-top: 30px;
}
.bar-container {
	width: 600px;
	height: 460px;
	margin: 0 auto;
}
.bar-container h2 {
	text-align: center;
}

.chartContain {
	/* width: 100%;
	height: 100%; */
	width: 600px;
	height: 400px;
}

.message-title {
	cursor: pointer;
}
.handle-row {
	margin-top: 30px;
}
</style>
