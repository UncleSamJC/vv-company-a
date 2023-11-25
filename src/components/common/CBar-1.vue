<template>
	<div class="container">
		<el-row :gutter="30">
			<el-col :span="14">
				<div class="bar-container">
					<h3>Project Overview(Data-TBD)</h3>

					<div ref="echarts" class="chartContain"></div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import * as echarts from 'echarts';
import { option } from '@/api/bar-total-option.js';

export default {
	data() {
		return {
			echarts: null,
			title: 'This shared by Dashboard page and Bar-1 page',
			option
		};
	},
	methods: {
		getData() {
			this.chart = echarts.init(this.$refs.echarts);
			this.chart.setOption(this.option);
		}
	},
	mounted() {
		this.getData();
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
