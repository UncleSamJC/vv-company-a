// OptionObject.js
export const option = {

	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	grid: {
		left: '1%',
		right: '1%',
		bottom: '6%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		data: [
			'Jun-21',
			'Jul-21',
			'Aug-21',
			'Sep-21',
			'Oct-21',
			'Nov-21',
			'Dec-21',
			'Jan-22',
			'Feb-22',
			'Mar-22',
			'Apr-22',
			'May-22',
			'Jun-22',
			'Jul-22',
			'Aug-22',
			'Sep-22',
			'Oct-22',
			'Nov-22',
			'Dec-22',
			'Jan-23',
			'Feb-23',
			'Mar-23',
			'Apr-23',
			'May-23',
			'Jun-23',
			'Jul-23',
			'Aug-23',
			'Sep-23',
			'Oct-23'
		],
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			formatter: function(value) {
				// Divide the value by 1000 and add "k"
				return '$' + (value / 1000).toFixed(0) + 'k';
			}
		}
	}],
	series: [{
		name: 'Direct',
		type: 'bar',
		barWidth: '80%',
		data: [
			12000, 28000, 43000, 61000, 78000, 98000, 123000, 147000, 172000, 196000, 225000, 250000,
			268000, 287000,
			332000, 320000, 390000, 416000, 446000, 475000, 464000, 533000, 564000, 591000, 620000,
			649000, 678000, 704000,
			782000
		]
	}]
};