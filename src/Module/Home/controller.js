/*
 *	@tql 2017/12/08
 *	首页控制器
 */
import ServicePhpApi from '../../Config/index';

export default ["module.home.controler", ['$scope', "$http", "$ionicLoading", ($scope, $http, $ionicLoading) => {

	// 续集api
	var ServiceApi = ServicePhpApi.phpapi.API.com.php.home.IndexController($http);
	console.log(ServiceApi, "续集API成功，开始发送请求！");
	$ionicLoading.show({
		template: '续集API成功，开始发送请求！'
	});
	ServiceApi.getStoreDetail(1, function(data) {
		console.log("请求成功！");
		$ionicLoading.hide();
	}, function(data) {
		console.log("请求失败！");
		$ionicLoading.hide();
	})
	$scope.promption = "This is home";
}]];