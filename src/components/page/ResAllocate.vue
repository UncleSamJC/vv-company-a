<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-group"></i>
					Resource Allocation Tool
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="add-tool">
				<el-input placeholder="Input Resource Name" v-model="resname" style="width: 175px; margin-right: 10px" clearable></el-input>
				<el-select v-model="restype" clearable placeholder="Resource Type" class="mr10">
					<el-option v-for="item in resoptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>

				<el-button type="primary" @click="addResource" class="mr10">Add Resource</el-button>
				<span>Colors:</span>
				<el-tag class="rs1 mr5">Tradesman</el-tag>
				<el-tag class="rs2 mr5">Labourer</el-tag>
				<el-tag class="rs3 mr5">Truck</el-tag>
				<el-tag class="rs4 mr5">Trailer&Tools</el-tag>
				<el-tag class="rs5 mr5">Generator</el-tag>
			</div>
			<div class="drag-box">
				<div class="drag-box-item">
					<div class="item-title">Resource Pool</div>

					<draggable class="fund-group list-group" :animation="500" :list="list0" group="resouce" @change="log" @remove="removeHandle">
						<div class="list-group-item" v-for="(element, index) in list0" :key="element.name" :class="element.type">
							{{ element.name + ' - ' + element.type }}
						</div>
					</draggable>
				</div>
				<div class="drag-box-item">
					<div class="item-title">View Star3</div>
					<draggable class="project1-group list-group" :animation="500" :list="list1" group="resouce" @change="log" @remove="removeHandle">
						<div class="list-group-item" v-for="(element, index) in list1" :key="element.name" :class="element.type">
							{{ element.name }}
						</div>
					</draggable>
				</div>
				<div class="drag-box-item">
					<div class="item-title">Lamp Lighter</div>
					<draggable class="project2-group list-group" :animation="500" :list="list2" group="resouce" @change="log" @remove="removeHandle">
						<div class="list-group-item" v-for="(element, index) in list2" :key="element.name" :class="element.type">
							{{ element.name }}
						</div>
					</draggable>
				</div>
				<div class="drag-box-item">
					<div class="item-title">Linesight</div>
					<draggable class="project3-group list-group" :animation="500" :list="list3" group="resouce" @change="log" @remove="removeHandle">
						<div class="list-group-item" v-for="(element, index) in list3" :key="element.name" :class="element.type">
							{{ element.name }}
						</div>
					</draggable>
				</div>
			</div>
		</div>
		<div class="map-container">
			<div id="map"></div>
		</div>
	</div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import draggable from 'vuedraggable';

let id = 100;
export default {
	name: 'resallocate',
	data() {
		return {
			map: null,
			resname: '',
			restype: '',
			resoptions: [
				{
					value: 'rs1',
					label: 'Tradesman'
				},
				{
					value: 'rs2',
					label: 'Labourer'
				},
				{
					value: 'rs3',
					label: 'Truck'
				},
				{
					value: 'rs4',
					label: 'Trailer with tools'
				},
				{
					value: 'rs5',
					label: 'Generator'
				}
			],
			list0: [
				{ name: 'Andy', id: 8, type: 'rs1' },
				{ name: 'Lucy', id: 9, type: 'rs1' },
				{ name: 'Mike', id: 10, type: 'rs1' },
				{ name: 'L11', id: 11, type: 'rs2' }
			],
			list1: [
				{ name: 'John', id: 1, type: 'rs1' },
				{ name: 'Joao', id: 2, type: 'rs1' },
				{ name: 'Jean', id: 3, type: 'rs1' },
				{ name: 'L12', id: 4, type: 'rs2' }
			],
			list2: [
				{ name: 'L54', id: 5, type: 'rs2' },
				{ name: 'Edgard', id: 6, type: 'rs1' },
				{ name: 'L29', id: 7, type: 'rs2' }
			],
			list3: [
				{ name: 'Karman', id: 15, type: 'rs1' },
				{ name: 'L58', id: 16, type: 'rs2' },
				{ name: 'L33', id: 17, type: 'rs2' }
			]
		};
	},
	mounted() {
		// Initialize the map
		mapboxgl.accessToken = 'pk.eyJ1IjoiZHowMDc3IiwiYSI6ImNsb3Z2azBndTB0ZGwyanFnNmR3NWx4NmQifQ.R2RTAvfJAI8ofToD3Ajy3A';
		this.map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v11', // style URL
			center: [-123.13183569070522, 49.24748280844511], // starting position as [longitude, latitude]
			zoom: 9 // starting zoom
		});

		// Add a marker to the map - Richmond
		var marker1 = new mapboxgl.Marker().setLngLat([-123.121213, 49.150521]).addTo(this.map);

		// Add a marker to the map - Surrey
		var marker2 = new mapboxgl.Marker().setLngLat([-122.840154, 49.152908]).addTo(this.map);
		// Add a marker to the map - Burnaby
		var marker3 = new mapboxgl.Marker().setLngLat([-122.973299, 49.256871]).addTo(this.map);

		// Create popups for  marker1 and marker2 and marker3
		var popup1 = new mapboxgl.Popup({
			closeButton: false,
			closeOnClick: true
		}).setHTML('View Star3');

		var popup2 = new mapboxgl.Popup({
			closeButton: false,
			closeOnClick: true
		}).setHTML('Lamp Lighter');

		var popup3 = new mapboxgl.Popup({
			closeButton: false,
			closeOnClick: true
		}).setHTML('Linesight');

		// Set popups to appear on mouseenter and disappear on mouseleave
		marker1
			.setPopup(popup1)
			.on('mouseenter', function () {
				popup1.addTo(this.map);
			})
			.on('mouseleave', function () {
				popup1.remove();
			});

		marker2
			.setPopup(popup2)
			.on('mouseenter', function () {
				popup2.addTo(this.map);
			})
			.on('mouseleave', function () {
				popup2.remove();
			});

		marker3
			.setPopup(popup3)
			.on('mouseenter', function () {
				popup3.addTo(this.map);
			})
			.on('mouseleave', function () {
				popup3.remove();
			});
	},
	methods: {
		addResource() {
			if (this.resname) {
				this.list0.push({ name: this.resname, id: id++, type: this.restype });
				this.resname = '';
			} else {
				this.$notify({
					title: 'Warning',
					message: 'This button will add Resource to the pool. Please input name and select type.',
					type: 'warning'
				});
			}
		},
		/* addTruck() {
			if (this.resname) {
				this.list0.push({ name: this.resname, id: id++, type: 'rs2' });
				this.resname = '';
			} else {
				this.$notify({
					title: 'Warning',
					message: 'This button will add r2 to the pool. Please input r2 No. first.',
					type: 'warning'
				});
			}
		}, */
		removeHandle(event) {
			console.log(event);
			//this.$message.success(`From ${event} moved to ${event} `);
		},
		add: function () {
			this.list.push({ name: 'Juan' });
		},
		replace: function () {
			this.list = [{ name: 'Edgard' }];
		},
		clone: function (el) {
			return {
				name: el.name + ' cloned'
			};
		},
		log: function (evt) {
			window.console.log(evt);
			// Check if 'added' is a property of myObject
			if (evt.hasOwnProperty('added')) {
				//console.log(evt.added.element.name);
				this.$message.success(`${evt.added.element.name} joined a new project!`);
			}
		}
	},
	components: {
		draggable
	}
};
</script>

<style scoped>
.container {
	max-width: 1100px;
}
.mr5 {
	margin-right: 5px;
}
.mr10 {
	margin-right: 10px;
}
.list-group {
	display: flex;
	flex-direction: column;
	min-height: 20px;
	box-sizing: border-box;
}
.list-group-item {
	position: relative;
	display: block;
	padding: 0.4rem 1.25rem;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0.125);
	cursor: move;
}

.rs1 {
	background-color: rgb(0, 70, 234);
	color: #fff;
}
.rs2 {
	background-color: rgb(22, 163, 74);
	color: #fff;
}
.rs3 {
	background-color: rgb(202, 138, 4);
	color: #fff;
}

.rs4 {
	background-color: rgb(239, 68, 68);
	color: #fff;
}
.rs5 {
	background-color: rgb(115, 115, 202);
	color: #fff;
}
.list-group-item:last-child {
	margin-bottom: 0;
	border-bottom-right-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
}
.list-group-item:first-child {
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
}
.map-container {
	margin-top: 10px;
	border-radius: 5px;
	max-width: 1050px;
	height: 350px;
	width: 100%;
}
/* Add any custom styles for your map container here */
#map {
	height: 100%;
	width: 99%;
	margin: 0 auto;
}
.add-tool {
	padding: 10px 10px;
	background-color: #eff1f5;
	margin-bottom: 1rem;
	max-width: 1070px;
}

.drag-box {
	display: flex;
	user-select: none;
}
.drag-box-item {
	box-sizing: border-box;
	flex: 1;
	max-width: 260px;
	min-width: 120px;
	background-color: #eff1f5;
	margin-right: 16px;
	border-radius: 6px;
	border: 1px #e1e4e8 solid;
	padding: 0.5rem 0.7rem;
}
.item-title {
	padding: 8px 8px 8px 12px;
	font-size: 14px;
	line-height: 1.5;
	color: #24292e;
	font-weight: 600;
}
.item-ul {
	padding: 0 8px 8px;
	height: 500px;
	overflow-y: scroll;
}
.item-ul::-webkit-scrollbar {
	width: 0;
}
.drag-list {
	border: 1px #e1e4e8 solid;
	padding: 10px;
	margin: 5px 0 10px;
	list-style: none;
	background-color: #fff;
	border-radius: 6px;
	cursor: pointer;
	-webkit-transition: border 0.3s ease-in;
	transition: border 0.3s ease-in;
}
.drag-list:hover {
	border: 1px solid #20a0ff;
}
.drag-title {
	font-weight: 400;
	line-height: 25px;
	margin: 10px 0;
	font-size: 22px;
	color: #1f2f3d;
}
</style>
