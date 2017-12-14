/*
 *	@tql 2017/12/08
 *	首页控制器
 */
import ServicePhpApi from '../../../config/index';

import crud from '../../../services/crud';

export default ["module.unit.grid.controler", ['$scope', "$http", "$ionicLoading", "$location","pageNationConfig", ($scope, $http, $ionicLoading, $location,pageNationConfig) => {
	let queryItems = {
        'name':{
            field: 'name',
            displayName: '单位名称'
        },
        'unit':{
            field: 'unit',
            displayName: '单位符号'
        },
        'unit_type':{
            field: 'unit_type',
            displayName: '单位类型',
            type: "select",
            selectOptions : [
                {
                    name : '全部', value : undefined
                },
                {
                    name : '整数', value : 1
                },
                {
                    name : '小数',value : 2
                }
            ]
        }
    };

	let defaultOptions =  {
        pageDataBindingName: 'data',
        viewBaseUrl : "commodity/unit",
        apiBaseUrl: "http://shopadmin-local.andaren.com/api/commodity/unit",
        defaultSort: 'created_at',
        defaultOrder: 'DESC',
        queryTaleOptions : [
            [
                queryItems['name'], queryItems['unit'], queryItems['unit_type']
            ]
        ],
        fixedListLimit : {},
        gridApiMethod : 'GET',
        listCallback: function (data) {
        }
    };


	let gridOptions = angular.copy(defaultOptions);
	gridOptions.viewBaseUrl = '/product';
	gridOptions.pageDataBindingName = 'productList';

	gridOptions.queryTaleOptions = [
		[
			queryItems['productName']
		]
	];

	crud.gridFunc($scope, $http, $location, $ionicLoading, pageNationConfig, gridOptions, null, {
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
	$scope.promption = "unit";
}]];