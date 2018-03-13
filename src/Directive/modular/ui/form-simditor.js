// import * as _ from 'lodash';
import {getRedux,readRedux} from '@/Redux';

export default () => {
	let app = readRedux({
		type: "APP"
	});
	
	app.directive('modularSimditor', ["$timeout", "$uibModal", "$log", "$document", "$rootScope",'$sce', ($timeout, $uibModal, $log, $document, $rootScope,$sce) => {
		return {
			restrict: 'AE',
			scope: {
				blur: "=blur",
				model:"=model",
			},
			template: "",
			require: '^ngModel',
			link: ($scope, iElement, iAttrs,ngModel) => {
				var Eid ="Eid"+ Math.round(Math.random()*1000);
				$(iElement).attr("id",Eid);
				var E = window.wangEditor;
		        var editor = new E("#"+Eid);

		        // 或者 var editor = new E( document.getElementById('editor') )
		        editor.customConfig.menus = [
			        'head',  // 标题
				    'bold',  // 粗体
				    'italic',  // 斜体
				    'underline',  // 下划线
				    'strikeThrough',  // 删除线
				    'foreColor',  // 文字颜色
				    'backColor',  // 背景颜色
				    'link',  // 插入链接
				    // 'list',  // 列表
				    'justify',  // 对齐方式
				    // 'quote',  // 引用
				    // 'emoticon',  // 表情
				    'image',  // 插入图片
				    // 'table',  // 表格
				    // 'video',  // 插入视频
				    // 'code',  // 插入代码
				    // 'undo',  // 撤销
				    // 'redo'  // 重复
			    ];
			    editor.customConfig.colors = [
			        '#000000',
			        '#333333',
			        '#666666',
			        '#999999',
			        '#cccccc',
			        '#dddddd',
			        '#eeeeee',			        
			        '#ffffff',
			        '#1c487f',
			        '#4d80bf',
			        '#c24f4a',
			        '#8baa4a',
			        '#7b5ba1',
			        '#46acc8',
			        '#f9963b',
			        '#337ab7',
			    ];

			    editor.customConfig.zIndex = 1;

			    editor.customConfig.onchange = function (html) {
		            // 设置视图和调用 apply$sce
                    $scope.$apply(function() {
                        ngModel.$setViewValue(html);
                    });
		        }
		        editor.customConfig.onblur = function (html) {
			       $scope.blur('内容编辑');
			    }
		        editor.create();

		        $scope.$watch("model", function(){
		        	editor.txt.html(ngModel.$viewValue);
		        });
		        
		        

			}
		};
	}]);

	

};