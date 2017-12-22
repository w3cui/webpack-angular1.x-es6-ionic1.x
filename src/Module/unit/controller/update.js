/*
 *	@tql 2017/12/08
 *	首页控制器
 */
import ServicePhpApi from '@/config/index';

import func, {gridFunc,updateFunc} from '@/Services/func';

export default ["module.unit.update.controler", ['$scope', "$http", "$ionicLoading", "$location","pageNationConfig","$routeParams", ($scope, $http, $ionicLoading, $location,pageNationConfig,$routeParams) => {

    $scope.unitTypeArr = [
        {"name":"请选择", "value":undefined},
        {"name":"整数", "value":"1"},
        {"name":"小数", "value":"2"}
    ];
    var editOptions = {
        id: $routeParams.id,
        dataName: "item",
        formName: "formData",
        formFields: [
            "name",
            "unit",
            "unit_type"
        ],
        apiBaseUrl:defaultOptions.apiBaseUrl,
        formatSubmitData: function (data) {
            data = data || {};
        },
        formatDetailData: function (data) {
            data = data || {};
        },
        onSuccess: function ($scope, data, submitData) {
            $location.path('commodity/unit/grid');
            lwj.openSuccessAlertDialog($scope,$modal,'操作提示','操作成功');
        }
    };
    func.updateFunc($scope, $http, $location, editOptions, $modal);
}]];