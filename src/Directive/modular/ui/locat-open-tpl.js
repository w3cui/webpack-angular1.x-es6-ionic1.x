// import * as _ from 'lodash';
import {getRedux,readRedux} from '@/Redux';
import locatOpen from "./locat-open-tpl.html";
export default ()=>{
	let app = readRedux({type: "APP"});
	app.factory('directive.modular.ui', ["$uibModal","$rootScope", ($uibModal,$rootScope) => {
		return {
			locatOpen : (item,eidtItem)=>{
				return $uibModal.open({
					animation: true,
					ariaLabelledBy: 'modal-title-top',
					ariaDescribedBy: 'modal-body-top',
					scope: $rootScope.$new(true),
					template: locatOpen ,
					controller: "directive.modular.ui.locat.open",
					resolve: {
                        $params: function () {
                            return {
                            	item:item,
                            	eidtItem:eidtItem,
                            }
                        }
                    },
				});
			}
		};
	}])
	.controller('directive.modular.ui.locat.open', ["$http",'$params',"$scope","directive.modular.services" ,function($http,$params,$scope,$modularServices){
		// var _this = {};
		// 继承服务
        //$modularServices.call(_this, $scope, {});
		
		$scope.openitem = $params.item;
		
		// 选中历史记录
		$scope.onLocatSelected = (data,$index) =>{

			init();				
			data.radio = true;
			$scope.$close(angular.copy($scope.openitem));
			getRedux(true,{type:"MODULAR_UI_OPEN"});

		};

		let init = ()=>{
			_.forEach($scope.openitem,function(val,key){
				delete val.radio;
			});	

		}



	}]);
};