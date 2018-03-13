import * as $_ from 'lodash';
import {getRedux,readRedux} from '@/Redux';
import ServicePhpApi from '@/Config/lwj-services-php-api';

export default ()=>{
	let app = readRedux({type: "APP"});
	app.factory('directive.modular.services', ["$http","$log","$timeout","directive.modular.ui","$sce", ($http,$log,$timeout,$modularUi,$sce) => {
		function Service(_$scope, _options) {

			// 续集模板编辑api
			var pmcApi = ServicePhpApi.API.com.php.pmc.IndexController($http);

            var _this = this;

            // 解决追加薪组件与切换组件位置重复应用BUG
            var centerAnchor = true;

            // 设置默认数据/提交数据接口
			_$scope.eidtItem = [] ;

            // 右侧from编辑数据
            _$scope.eidtForm = false;

            // 历史记录存储
            _$scope.locationbar = [];

            // 表示左边拖动数据
			_.forEach(_$scope.item, (val, key) => {
				val.tagging = true;
			});

			/*
			 * 拉取数据默认数据
			 */
			pmcApi.getModularViewList(50,function(data){
				_$scope.eidtItem = data.item;
			});

	        /*
	         * 拖拽插件
	         */
	        _this.$setOnDrop = function(){

	        	// 追加组件提交
	        	_$scope.onDropComplete = function(data, evt) {
					// console.log("127", "$scope", "onDropComplete", data, evt);
					if (!data) return false;
					var index = _$scope.eidtItem.indexOf(data);

					$timeout(() => {
						var copyData = angular.copy(data);
						if (copyData.tagging && centerAnchor) {
							delete copyData.tagging;
							_$scope.eidtItem.push(copyData);
							_$scope.onDropEditForm(_.last(_$scope.eidtItem));
							_$scope.getLocationbar('新增模块【'+copyData.name+'】');
						}
						centerAnchor = true;
					}, 10);

				}

				// 选择编辑对象
				_$scope.onDropEditForm = function(data) {
					_$scope.eidtForm = false;
					_$scope.eidtForm = data;					
					if (data.active) {
						data.active = true;
						//_$scope.onDropEidtFormHide();
					} else {
						_.each(_$scope.eidtItem, function(value, key) {
							delete value.active;
						});
						data.active = true;
					}
				}

				// 删除数据
				_$scope.onDropRemove = function(data) {
					_.remove(_$scope.eidtItem, (n) => {
						return n == data;
					});
					if (_$scope.eidtForm == data) {
						_$scope.onDropEidtFormHide();
					}
					_$scope.getLocationbar('删除模块【'+data.name+'】');

				}

				// 消耗编辑数据
				_$scope.onDropEidtFormHide = () => {

					_.each(_$scope.eidtItem, function(value, key) {
						delete value.active;
					});

					_$scope.eidtForm = false;
				};

	        }


	        /*
	         *	绑定拖拽状态与事件
	         */
	        _this.$setOnDrag = function(){

	        	// 位置切换成功回调
	        	_$scope.onDragSuccess = function(index, data, evt) {
					// console.log("133", "_$scope", "onDragSuccess", "", evt);
					centerAnchor = false;
					if (data.tagging) {
						data = angular.copy(data);
						delete data.tagging;					
						_$scope.eidtItem.splice(index, 0, data);
						_$scope.onDropEditForm(_$scope.eidtItem[index]);
					} else {
						var otherdata = _$scope.eidtItem[index];
						var otherIndex = _$scope.eidtItem.indexOf(data);
						_$scope.eidtItem[index] = data;
						_$scope.eidtItem[otherIndex] = otherdata;

						_$scope.onDropEditForm(_$scope.eidtItem[index]);
					}
					
					_$scope.getLocationbar('位置移动【'+data.name+'<=>'+_$scope.eidtItem[index].name+'】');
				}


				// 绑定拖拽状态与事件
				let onDraggableEvent = function(evt, data) {

					switch (evt.name) {
						case 'draggable:move':
							// console.log("128", "onDraggableEvent", evt, data);
							$(data.element).addClass('drag-move').parent().addClass('drag-move');
							break;
						case 'draggable:end':
							$(data.element).addClass('drag-move').parent().removeClass('drag-move');
							break;
						default:
							// statements_def
							break;
					}

				}

				_$scope.$on('draggable:start', onDraggableEvent);
				_$scope.$on('draggable:move', onDraggableEvent);
				_$scope.$on('draggable:end', onDraggableEvent);

	        }

	        /*
	         *
	         */
			_this.$setDetailContent = function(){
				_$scope.detailContent = function(content) {
                    return $sce.trustAsHtml(content);
                };
			};

			//历史记录
			_this.$setLocationbar = function(){
				
				// 存储初始化数据
				let locatTtem = angular.copy(_$scope.eidtItem);
				_$scope.isfallback = true;
				_$scope.isforward = true;
				// 设置历史记录
				let _$setLocationbar = (data,key2) =>{
					_$scope.eidtItem = data;
					// 回显示已经选中的元素
					_.forEach(_$scope.eidtItem,(val,key)=>{
						if(val.active){
							_$scope.onDropEditForm(val);
						}
					});
					// 写入历史进退按钮状态
					_$scope.isfallback = key2 <= 0;
					_$scope.isforward = key2 >= _$scope.locationbar.length-1;
				};

				// 数据比对递归算法
				var _$isLoctionbarRet = true;
				let _$isLoctionbar = (data1,data2)=>{
					
					_.forEach(data1,(val,key)=>{
						if(!_$isLoctionbarRet) return false;
						if(typeof val == "object"){
							_$isLoctionbar(val,data2[key]);
						}else if(val == data2[key] || key == "radio"){
							_$isLoctionbarRet = true;
						}else{
							_$isLoctionbarRet = false;
						}
					});
					return _$isLoctionbarRet;
				}

				// 写入历史记录
				_$scope.getLocationbar = (typeName) => {
					if (_$scope.eidtItem != []) {
						var isRadio = false;

						if(_$scope.locationbar.length>0){
							_$isLoctionbarRet = true;
							if(_$isLoctionbar(_.last(_$scope.locationbar).data,angular.copy(_$scope.eidtItem))){					
								return false;
							}
						}

						_.forEach(_$scope.locationbar,(val,key)=>{
							isRadio = val.radio ? true : isRadio ;
							if(val.radio){
								_.remove(_$scope.locationbar, function(n,k) {
								  return k > key;
								});
								delete val.radio;
								return false;
							}
							
						});
						
						
						_$scope.locationbar.push({
							$index:_$scope.locationbar.length,
							typeName:typeName || "数据修改" ,
							time: new Date() ,
							data:angular.copy(_$scope.eidtItem),
							radio:true,
						});

						_$scope.isfallback = false;
						_$scope.isforward = true;
					}
				}

				// 后退
				_$scope.onLocatFallback = () => {
					let $ret = true; 
					_.forEach(_$scope.locationbar,(val,key)=>{
						if(val.radio){
							delete val.radio;
							$ret = key-1 <= 0 ? 0 : key-1;
							_$scope.locationbar[$ret].radio=true;
							_$setLocationbar(_$scope.locationbar[$ret].data,$ret);
							return false;
						}
					});
					
				}

				// 前进
				_$scope.onLocatForward = () => {
					let $ret = true; 
					_.forEach(_$scope.locationbar,(val,key)=>{
						if(val.radio){
							delete val.radio;
							$ret = key+1 >= _$scope.locationbar.length-1 ? _$scope.locationbar.length-1 : key+1;
							_$scope.locationbar[$ret].radio = true;
							_$setLocationbar(_$scope.locationbar[$ret].data,$ret);
							return false;
						}
					});					
				}

				// 选中历史记录
				_$scope.onLocatSelected = (data) =>{
					$modularUi.locatOpen(_$scope.locationbar,_$scope.eidtItem).result.then(function (selectedItem) {
						_$scope.locationbar = selectedItem;
						$timeout(()=>{
							_.forEach(_$scope.locationbar,(val,key)=>{
								if(val.radio){
									_$setLocationbar(val.data,key);
								};
							});
						},300);
				    	
				    });
				};

			};

		};
		
		

        return function ($scope, options) {
            if (_.isNull($scope) || _.isUndefined($scope)) {
                return Service;
            } else {
                Service.call(this, $scope, options);
                return this;
            }
        }
	}]);
};