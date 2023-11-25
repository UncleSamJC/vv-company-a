<template>
	<div class="container-wrapper">

		<div class="bar-container">
			<h3>CompanyA Bar - 2</h3>

			<div ref="echarts2" class="chartContain"></div>
		</div>

	</div>
</template>

<script>
import * as echarts from 'echarts';
import { option } from '@/api/bar-2-option.js';

export default {
	data() {
		return {
			echarts: null,
			title: 'This shared by Dashboard page and Bar-1 page',
			option2: option
		};
	},
	methods: {
		getData() {
			this.chart2 = echarts.init(this.$refs.echarts2);
			this.chart2.setOption(this.option2);
		}
	},
	mounted() {
		this.getData();
	},
	computed: {
		barTwoOption() {
			return this.$store.state.barTwoOption;
		}
	},
	watch: {
		barTwoOption(newBarTwoOption, oldBarTwoOption) {
			console.log(newBarTwoOption);
			//this.chart2.setOption(newBarTwoOption);
		}
	}
};
</script>

<style scoped>
.container-wrapper {
	display: flex;
	justify-content: center;
	padding-top: 30px;
	padding-bottom: 100px;
}




.block span {
	font-size: 0.9rem;
}
.bar-container {
	width: 600px;
	height: 400px;
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
