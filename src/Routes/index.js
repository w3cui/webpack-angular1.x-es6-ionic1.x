/*
 * 路由配置
 */
import home from '../module/home/home-grid.html';
import {getRedux,readRedux} from '../Redux';
const state = [
			['home', {
				url: '/',
				template: home,
				controller: 'module.home.controler',
			}],
		];

// 通用路由配置
export default {

	config: ['$stateProvider', '$urlRouterProvider', 'routerProvider', '$locationProvider',($stateProvider, $urlRouterProvider, routerProvider,$locationProvider) => {
		
		state.forEach((value) => {
			$stateProvider.state(...value);
		});
		// $locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
	}],

	run: (router) => {
		router.setUpRoutes();
	},

	provider: ['router',function($stateProvider) {    
		this.$get = function($http, $state) {      
			return {        
				setUpRoutes: function() {
					readRedux({
						type: "ROUTES"
					}).forEach((value) => {
						console.log(value)
						$stateProvider.state(...value);
					});
				}      
			}    
		};
		return this;  
	}],
};