// import * as _ from 'lodash';
import {getRedux,readRedux} from '@/Redux';


import modularEidtForm from './modular-eidt-form.html';

export default ()=>{
	let app = readRedux({type: "APP"});
	app.directive('modularEidtForm', ["$timeout", ($timeout) => {
		return {
			restrict: 'AE',
			scope: {
				item: "=item",
				getLocationbar:"=locationbar"
			},
			template: modularEidtForm,
			link: ($scope, iElement, iAttrs) => {
				
			}
		};
	}]);
}