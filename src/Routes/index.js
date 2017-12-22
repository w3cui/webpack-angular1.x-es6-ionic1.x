/*
 * 路由配置
 */
import news from '../module/News/news-grid.html';
import {getRedux,readRedux} from '../Redux';

const state = [
	['news', {
		url: '/news',
		template: news,
		controller: 'module.news.controler.grid',
	}],
];


// 通用路由配置
export default {
	config: ['$stateProvider', '$urlRouterProvider', 'routerProvider', '$locationProvider',($stateProvider, $urlRouterProvider, routerProvider,$locationProvider) => {
		state.forEach((value) => {
			$stateProvider.state(...value);
		});
		// $locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/unit/grid');
	}],

	run: (router) => {
		router.setUpRoutes();
		console.log(router);
	},

	provider: ['router', function($stateProvider) {    
		this.$get = function($http, $state) {      
			return {        
				setUpRoutes: function() {
					readRedux({
						type: "ROUTES"
					}).forEach((value) => {
						$stateProvider.state(...value);
					});
				}      
			}    
		};
		return this;  
	}]

};