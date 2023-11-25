<template>
	<div class="">
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-copy"></i>
					| Bar 2 for Company A
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<el-row :gutter="30">
				<el-col :span="14">
					<com-bar2></com-bar2>
				</el-col>
				<el-col :span="8">
					<h3>DATA FACTOR:</h3>
					<div style="margin: 20px"></div>

					<el-form label-position="Right" label-width="110px" :model="barData" ref="bardataForm">
						<div class="block">
							<span class="demonstration">FSR</span>
							<el-slider v-model="barData.fsrValue" show-stops :step="0.1" :min="5" :max="10" @change="handleBarDataChange"></el-slider>
						</div>
						<div class="block">
							<span class="demonstration">% buildable</span>
							<el-slider v-model="barData.percBuildable" show-stops :step="100" :max="5000" @change="reportChange"></el-slider>
						</div>
						<div class="block">
							<span class="demonstration">Size</span>
							<el-slider v-model="barData.size" show-stops :step="100" :max="3000" @change="reportChange"></el-slider>
						</div>
						<div class="block">
							<span class="demonstration">SF$</span>
							<el-slider v-model="barData.sfDollar" show-stops :step="100" :max="3000" @change="reportChange"></el-slider>
						</div>
						<div class="block">
							<span class="demonstration">Trunch</span>
							<el-slider v-model="barData.trunch" show-stops :step="100" :max="3000" @change="reportChange"></el-slider>
						</div>
						<div class="block">
							<span class="demonstration">Number of units</span>
							<el-slider v-model="barData.noOfUnits" show-stops :step="10" :max="1000" @change="reportChange"></el-slider>
						</div>
					</el-form>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import * as echarts from 'echarts';
// import {option} from '@/api/bar-2-option.js';
import ComBar2 from '../common/CBar-2.vue';
export default {
	data() {
		return {
			chart2: null,
			barData: {
				fsrValue: 7.3,
				percBuildable: 2000,
				size: 600,
				sfDollar: 1000,
				trunch: 1200,
				noOfUnits: 175
			}
			// 	option2:option
		};
	},
	methods: {
		handleBarDataChange() {
			if (this.barData.fsrValue > 5) {
				this.$store.commit('bar2FSRchange');
			} else {
				this.$notify({
					title: 'FSR',
					message: 'cannot below 500. This is just a Demo example. I need the real formulation method.'
				});
			}
			//console.log(this.option2.series[0].data[i]);

			//this.chart2.setOption(this.option2);
		},
		
		reportChange() {
			this.$notify({
				title: 'NOTICE',
				message: 'Not implemented'
			});
		}
	},
	mounted() {
		
	},
	components: {
		ComBar2
	}
};
</script>

<style scoped>
.container {
	width: 100%;
	height: 450px;
	margin: 0 auto;
	padding: 0 0;
	padding-bottom: 5rem;
}

.container h3 {
	margin-top: 30px;
	text-align: center;
}

.chartContain {
	width: 100%;
	height: 100%;
}

.block span {
	font-size: 0.9rem;
}
.bar-container {
	width: 600px;
	height: 400px;
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
