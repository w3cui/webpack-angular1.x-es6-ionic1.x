/*
 *	@tql 2017/12/08
 *	首页控制器
 */
import ServicePhpApi from '../../Config/index';
import func, {gridFunc,updateFunc} from '../../Services/func';

export default ["module.home.controler", ['$scope', "$http", "$ionicLoading", "$location","pageNationConfig", ($scope, $http, $ionicLoading, $location,pageNationConfig) => {
	let queryItems = {
      'productName':{
          field: 'productName',
          displayName: '产品名称'
      }
  };

	let defaultOptions = {
      pageDataBindingName: 'productList',
      viewBaseUrl: '/product',
      apiBaseUrl: '/api/product',
      defaultSort: 'updateTime',
      defaultOrder: 'DESC',
      queryTaleOptions: [],
      fixedListLimit: {},
      gridApiMethod: 'POST',
      listCallback: function(data) {

      }
  };


	let gridOptions = angular.copy(defaultOptions);
	gridOptions.viewBaseUrl = '/product';
	gridOptions.pageDataBindingName = 'productList';
	gridOptions.noInitList = true;

	gridOptions.queryTaleOptions = [
		[
			queryItems['productName']
		]
	];

	gridFunc($scope, $http, $location, $ionicLoading, pageNationConfig, gridOptions, null, {
		'multiSelect': true
	});

	// 续集api
	var ServiceApi = ServicePhpApi.phpApi.API.com.php.home.IndexController($http);
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