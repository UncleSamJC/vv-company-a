import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			redirect: '/dashboard'
		},
		{
			path: '/',
			component: () => import( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
			meta: {
				title: '自述文件'
			},
			children: [{
					path: '/dashboard',
					component: () => import( /* webpackChunkName: "dashboard" */
						'../components/page/Dashboard.vue'),
					meta: {
						title: 'Home'
					}
				},
			

				{
					// 权限页面
					path: '/permission',
					component: () => import( /* webpackChunkName: "permission" */
						'../components/page/Permission.vue'),
					meta: {
						title: 'Rights',
						permission: true
					}
				},
				{
					path: '/404',
					component: () => import( /* webpackChunkName: "404" */
						'../components/page/404.vue'),
					meta: {
						title: '404'
					}
				},
				{
					path: '/403',
					component: () => import( /* webpackChunkName: "403" */
						'../components/page/403.vue'),
					meta: {
						title: '403'
					}
				},
				
				{
					path: '/bar1',
					component: () => import( /* webpackChunkName: "bar1" */
						'../components/page/Bar1.vue'),
					meta: {
						title: 'Bar1'
					}
				},
				{
					path: '/bar2',
					component: () => import( /* webpackChunkName: "bar2" */
						'../components/page/Bar2.vue'),
					meta: {
						title: 'Bar2'
					}
				},
			
				
				{
					path: '/resallocate',
					component: () => import( /* webpackChunkName: "bar2" */
						'../components/page/ResAllocate.vue'),
					meta: {
						title: 'ResAllocate'
					}
				}
				
			]
		},
		{
			path: '/login',
			component: () => import( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
			meta: {
				title: 'Log in'
			}
		},
		{
			path: '*',
			redirect: '/404'
		}
	]
});