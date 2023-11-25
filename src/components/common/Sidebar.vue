<template>
	<div class="sidebar">
		<!-- 折叠按钮 By DZ Nov 11,2023 -->
		<div class="arrow-wrapper">
			<div class="collapse-btn" @click="collapseChage">
				<i v-if="!collapse" class="el-icon-arrow-left"></i>
				<i v-else class="el-icon-arrow-right"></i>
			</div>
		</div>
		<el-menu
			class="sidebar-el-menu"
			:default-active="onRoutes"
			:collapse="collapse"
			background-color="#074080"
			text-color="#fff"
			active-text-color="#ffffff"
			unique-opened
			router
		>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index" :key="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
								<template slot="title">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<i :class="item.icon"></i>
						<span slot="title">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
import bus from '../common/bus';
export default {
	data() {
		return {
			collapse: false,
			items: [
				{
					icon: 'el-icon-lx-home',
					index: 'dashboard',
					title: 'Dashboard'
				},
				{
					icon: 'el-icon-lx-rank',
					index: 'bar1',
					title: 'PROJECTS'
				},
				{
					icon: 'el-icon-lx-punch',
					index: 'bar2',
					title: 'BAR TWO'
				},

				{
					icon: 'el-icon-lx-group',
					index: 'resallocate',
					title: 'Resource Allocator'
				},

				{
					icon: 'el-icon-lx-emoji',
					index: 'icon',
					title: 'Custom Icons'
				},
				{
					icon: 'el-icon-lx-global',
					index: 'i18n',
					title: 'I18N'
				},
				{
					icon: 'el-icon-lx-warn',
					index: '7',
					title: 'Errors',
					subs: [
						{
							index: 'permission',
							title: 'User Rights'
						},
						{
							index: '404',
							title: '404 Page'
						}
					]
				}
			]
		};
	},
	computed: {
		onRoutes() {
			return this.$route.path.replace('/', '');
		}
	},
	created() {
		// 通过 Event Bus 进行组件间通信，来折叠侧边栏
		bus.$on('collapse', (msg) => {
			this.collapse = msg;
			bus.$emit('collapse-content', msg);
		});
	},
	methods: {
		// 侧边栏折叠
		collapseChage() {
			this.collapse = !this.collapse;
			bus.$emit('collapse', this.collapse);
		}
	}
};
</script>

<style scoped>
.sidebar {
	display: block;
	position: absolute;
	left: 0;
	top: 60px;
	bottom: 0;
	overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
	width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
	width: 250px;
}
.sidebar > ul {
	height: 100%;
}
/* 手工将icon变白色 */
.sidebar li i {
	color: #fff;
}

.arrow-wrapper {
	border-radius: 50%;
}
.collapse-btn {
	position: absolute;
	padding: 0 3px;
	top: 18px;
	right: -5px;
	z-index: 1000 !important;
	color: #4d4d4d;
	visibility: hidden;
	font-size: 0.9rem;
	background-color: #f2f2f2;
	border-radius: 50%;
}

.sidebar:hover .collapse-btn {
	visibility: visible;
}
</style>
