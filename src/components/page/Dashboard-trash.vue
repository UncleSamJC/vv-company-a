<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="24">
				<el-card shadow="hover">
					<com-bar1 @click.native="navigateToBar1"></com-bar1>
				</el-card>
				<el-card>
					
				</el-card>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
import bus from '../common/bus';
import ComBar1 from '../common/CBar-1.vue'

export default {
	name: 'dashboard',
	data() {
		return {
			name: localStorage.getItem('ms_username'),
			data: [
				{
					name: '2018/09/04',
					value: 1083
				},
				{
					name: '2018/09/05',
					value: 941
				},
				{
					name: '2018/09/06',
					value: 1139
				},
				{
					name: '2018/09/07',
					value: 816
				},
				{
					name: '2018/09/08',
					value: 327
				},
				{
					name: '2018/09/09',
					value: 228
				},
				{
					name: '2018/09/10',
					value: 1065
				}
			],
			options: {
				type: 'bar',
				title: {
					text: 'Recent Week'
				},
				xRorate: 25,
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				datasets: [
					{
						label: 'GE',
						data: [234, 278, 270, 190, 230]
					},
					{
						label: 'LG',
						data: [164, 178, 190, 135, 160]
					},
					{
						label: 'Samsung',
						data: [144, 198, 150, 235, 120]
					}
				]
			},
			options2: {
				type: 'line',
				title: {
					text: 'Trend'
				},
				labels: ['June', 'July', 'Augest', 'September', 'October'],
				datasets: [
					{
						label: 'Food',
						data: [234, 278, 270, 190, 230]
					},
					{
						label: 'Supply',
						data: [164, 178, 150, 135, 160]
					},
					{
						label: 'Med',
						data: [74, 118, 200, 235, 90]
					}
				]
			}
		};
	},
	components: {
		ComBar1
	},
	computed: {
		role() {
			return this.name === 'admin' ? 'Administrator' : 'Regular User';
		}
	},
	// created() {
	//     this.handleListener();
	//     this.changeDate();
	// },
	// activated() {
	//     this.handleListener();
	// },
	// deactivated() {
	//     window.removeEventListener('resize', this.renderChart);
	//     bus.$off('collapse', this.handleBus);
	// },
	methods: {
		navigateToBar1(){
			console.log('bar1 clicked');
			this.$router.push('/bar1');
		},
		changeDate() {
			const now = new Date().getTime();
			this.data.forEach((item, index) => {
				const date = new Date(now - (6 - index) * 86400000);
				item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			});
		},
		goToEditToDoPage() {
			console.log('This will goto TODO list panel');
			this.$router.push({ path: '/todo' });
		}
		// handleListener() {
		//     bus.$on('collapse', this.handleBus);
		//     // 调用renderChart方法对图表进行重新渲染
		//     window.addEventListener('resize', this.renderChart);
		// },
		// handleBus(msg) {
		//     setTimeout(() => {
		//         this.renderChart();
		//     }, 200);
		// },
		// renderChart() {
		//     this.$refs.bar.renderChart();
		//     this.$refs.line.renderChart();
		// }
	}
};
</script>

<style scoped>
.el-row {
	margin-bottom: 20px;
}

.grid-content {
	display: flex;
	align-items: center;
	height: 100px;
}

.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.grid-num {
	font-size: 30px;
	font-weight: bold;
}

.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
}

.grid-con-1 .grid-con-icon {
	background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
	background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
	background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
	color: rgb(242, 94, 67);
}

.user-info {
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 20px;
}

.user-avator {
	width: 120px;
	height: 120px;
	border-radius: 50%;
}

.user-info-cont {
	padding-left: 50px;
	flex: 1;
	font-size: 14px;
	color: #999;
}

.user-info-cont div:first-child {
	font-size: 30px;
	color: #222;
}

.user-info-list {
	font-size: 14px;
	color: #999;
	line-height: 25px;
}

.user-info-list span {
	margin-left: 70px;
}

.mgb20 {
	margin-bottom: 20px;
}

.todo-item {
	font-size: 14px;
}

.todo-item-del {
	text-decoration: line-through;
	color: #999;
}

.schart {
	width: 100%;
	height: 300px;
}
</style>
