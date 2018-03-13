// import * as _ from 'lodash';
import {getRedux,readRedux} from '@/Redux';

import modularEidtType from './modular-eidt-type.html';

export default ()=>{
	let app = readRedux({type: "APP"});
	app.directive('modularEidtType', ["$timeout", "$uibModal", "$log", "$document","directive.modular.services", ($timeout, $uibModal, $log, $document,$modularServices) => {
	return {
		restrict: 'AE',
		scope: {
			item: "=item"
		},
		template: modularEidtType,
		link: ($scope, iElement, iAttrs) => {
			var _this = {};
			// 继承服务
            $modularServices.call(_this, $scope, {});
            // 续集服务
            _this.$setOnDrop();
			_this.$setOnDrag();
			_this.$setLocationbar();
			_this.$setDetailContent();
		}
	};
}]);
};