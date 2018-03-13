/*
 *	@tql 2017/12/08
 *	首页控制器
 */
import ServicePhpApi from '@/Config/lwj-services-php-api';
import func, {gridFunc,updateFunc} from '../../Services/func';

export default ["module.home.controler", ['$scope', "$http", "$uibModal","$location", ($scope, $http, $uibModal, $location,pageNationConfig) => {
	// 续集api
	var ServiceApi = ServicePhpApi.API.com.php.pmc.IndexController($http);
	ServiceApi.getModularList(1, function(data) {
		console.log("请求成功！",data);
		$scope.modularData = data.item;
	}, function(data) {
		console.log("请求失败！");
	})
	$scope.promption = "This is home";
}]];