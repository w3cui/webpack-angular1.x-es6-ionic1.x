/**
 * Created by liyi on 15/10/20.
 */
// import * as _ from 'lodash';   

let lwj = {};

lwj.IdentityCodeValid = function(code) {
    var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    };
    var tip = "";
    var pass = true;

    if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    } else if (!city[code.substr(0, 2)]) {
        tip = "身份证地址编码错误";
        pass = false;
    } else {　　 //18位身份证需要验证最后一位校验位

        if (code.length == 18) {
            code = code.split('');　　 //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if (parity[sum % 11] != code[17]) {
                tip = "身份证校验位错误";
                pass = false;
            }
        }
    }
    return {
        'pass': pass,
        'msg': tip
    };
}


lwj.getDownloadFilePath = function(resultUrl, callback, scope, $http, $modal) {
    if (!$.trim(resultUrl)) {
        return;
    }

    this.common = {};
    lwj.API.com.php.common.FileController.call(this.common, $http, $modal);

    var cutStyle = scope.cutStyle || 'x-oss-process=image/resize,m_fixed,h_100,w_100';
    var param = [
        'returnType=url',
        '_lxwxjt=' + $.cookie('LX-WXSRF-JTOKEN'),
        'filepath=' + resultUrl,
    ];

    var url = param.join('&');
    this.common.getFilePath('fileDownload?' + _.trimStart(url, '&'), function(src) {
        if (!$.trim(src)) {
            return;
        }
        var sourceSrc = src,
            targetSrc = src;

        if (src.indexOf(lwj.appScopeMain.DOMAIN_ALI_OSS) >= 0) {
            sourceSrc = src.substr(0, src.indexOf('?'));
            targetSrc = sourceSrc + (sourceSrc.indexOf('?') >= 0 ? '&' : '?') + cutStyle;
        }
        callback(sourceSrc, targetSrc, resultUrl);
    });
};

lwj.getNextNMonth = function(date, n) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日

    var year2 = year;
    var month2 = parseInt(month) + n;
    if (month2 > 12) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }

    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        // 日期按照最终的月份为最大值
        day2 = days2;
    }

    if (month2 < 10) {
        month2 = '0' + parseInt(month2);
    }
    if (day2 < 10) {
        day2 = '0' + parseInt(day2);
    }

    return year2 + '-' + month2 + '-' + day2;
}

lwj.openDatePicker = function($scope, $event, opened) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope[opened] = true;
};

lwj.openSuccessAlertDialog = function($scope, $modal, title, message) {
    return $modal.open({
        templateUrl: 'app/views/pages/success.html',
        controller: 'dialog.simple.ctrl',
        $scope: $scope.$new ? $scope.$new(true) : {},
        backdrop: true,
        resolve: {
            resolve: function() {
                return {
                    title: title,
                    message: message
                };
            }
        }
    });
};

lwj.openErrorAlertDialog = function($scope, $modal, title, message, confirmText, cancelText) {
    return $modal.open({
        templateUrl: 'app/views/pages/error.html',
        controller: 'dialog.simple.ctrl',
        backdrop: true,
        $scope: $scope.$new ? $scope.$new(true) : {},
        resolve: {
            resolve: function() {
                return {
                    title: title,
                    message: message,
                    confirmText: confirmText,
                    cancelText: cancelText
                };
            }
        }
    });
};

lwj.serverErrorAlertFunc = function($scope, $modal, data) {
    var msg = data.messages;
    if (msg.serverInternal) {
        return lwj.openErrorAlertDialog($scope, $modal, "服务器返回错误", msg.serverInternal.$srvmessage);
    } else {
        var serverErrorMessages = [];
        angular.forEach(data.messages, function(value, key) {
            serverErrorMessages.push(value.$srvmessage);
        });
        return lwj.openErrorAlertDialog($scope, $modal, "服务器返回错误", serverErrorMessages.join(';'));
    }
};

/**
 * [loading description]
 * @param  {[type]} $msg    [description]
 * @param  {[type]} $status [description]
 * @return {[type]}         [description]
 */
lwj.loading = function(content) {
    if ($("#layer_loading").length > 0) {
        $("#layer_loading").remove();
    } else {
        var html = '';
        if ($.trim(content)) {
            html = '<span style="position: fixed; left:50%; top:50%; margin:20px 0 0 -4%; z-index:9999999999;">' + content + '</span>';
        }
        var tpl = '<div id="layer_loading" style="background:url(http://webimg.liweijia.com/plugin/layer/skin/default/loading-0.gif) center center no-repeat rgba(255,255,255,0.2); position: fixed; left:0; top:0; width:100%; height:100%; z-index:999999999; ">' + html + '</div>';
        $("body").append(tpl);
    }
}

lwj.openDialogConfirm = function($scope, $modal, title, message, success) {
    var modalInstance = $modal.open({
            templateUrl: 'app/views/pages/dialog.confirm.html',
            controller: 'dialog.simple.ctrl',
            scope: $scope.$new(true),
            backdrop: true,
            resolve: {
                resolve: function() {
                    return {
                        title: title,
                        message: message
                    };
                }
            }
        })
        .result.then(function(_resolve) {
            success();
        });

    return modalInstance;
};


lwj.dialogConfirm = function($scope, $modal, $http, options) {
    var apiUrl = options.apiUrl ? options.apiUrl : '',
        apiData = options.apiData ? options.apiData : '',
        title = options.title ? options.title : '',
        callback = options.callback ? options.callback : '',
        message = options.message ? options.message : '',
        apiMethod = options.apiMethod ? options.apiMethod : 'POST';

    var modalInstance = $modal.open({
        templateUrl: 'app/views/pages/dialog.confirm.html',
        controller: 'dialog.simple.ctrl',
        scope: $scope.$new(true),
        backdrop: true,
        resolve: {
            resolve: function() {
                return {
                    title: title,
                    message: message
                };
            }
        }
    }).result.then(function(_resolve) {
        $http({
            method: apiMethod,
            url: apiUrl,
            data: apiData
        }).success(function(data) {
            if (typeof callback === 'function') {
                callback(data);
            }

            var msg = data.messages;
            if (data.code > 0) {
                if (msg.serverInternal) {
                    lwj.openErrorAlertDialog($scope, $modal, "服务器返回错误", msg.serverInternal.$srvmessage);
                }
            } else {
                $scope.innerQuery();
            }
        });
    });

    return modalInstance;
};

lwj.splitImg = function(img) {
    return (img && img != 'null') ? img.split(';') : [];
};
lwj.joinImg = function(img) {
    return img ? img.join(';') : '';
};

let gridFunc = function($scope, $http, $location, $modal, pageNationConfig, options, $selectModalInstance, $selectResolve) {

    var ths = {},
        /**
         * API的基地址
         * 需要按照后台的规范进行编写
         * GET  /entity/list
         * PUT  /entity/create
         * PUT  /entity/update
         * POST /entity/delete
         */
        apiBaseUrl = options.apiBaseUrl.charAt(options.apiBaseUrl.length - 1) === '/' ? options.apiBaseUrl : options.apiBaseUrl + '/',
        /**
         * 页面跳转的基地址
         * 需要按照前台的规范进行编写
         * 查询结果列表页   /some_base/grid
         * 创建新纪录页面   /some_base/create
         * 更新纪录的页面   /some_base/update/:id
         * 删除纪录，则需要弹出对话框给用户确认
         */
        viewBaseUrl = options.viewBaseUrl.charAt(options.viewBaseUrl.length - 1) === '/' ? options.viewBaseUrl : options.viewBaseUrl + '/',
        /**
         * 分页相关的配置，是options里配置的一个拷贝
         */
        $page = angular.copy(pageNationConfig),
        /**
         * 查询的相关配置
         */
        defaultQueryOption = [{
            'field': 'userMobile',
            'displayName': "手机号"
        }],
        /**
         * 查询是的选项
         * @type {*[]}
         */
        queryOptions = !options.queryOptions ? defaultQueryOption : options.queryOptions,
        /**
         * 查询列表绑定的模型名称
         */
        pageDataBindingName = !options.pageDataBindingName ? "data" : options.pageDataBindingName,
        /**
         * 按照什么字段查询
         * @type {string}
         */
        queryBy = '',
        /**
         * 查询的关键字
         * @type {string}
         */
        queryKey = '',

        /**
         * 区域查询
         * @type {Array}
         */
        searchRegion = [],

        /**
         * 客户区域查询
         * @type {Array}
         */
        searchUserRegion = [],
        /**
         * 模态对话框（用于删除确认对话框）
         */
        modalInstance,
        /**
         * 是否是多选
         * @type {boolean}
         */
        multiSelect = $selectResolve ? (!$selectResolve.multiSelect ? false : $selectResolve.multiSelect) : false,
        /**
         * 上次选中的列的checkBox
         */
        lastSelectTarget,

        /**
         *自定义list查询接口名，如果未定义 使用默认接口名"list"
         */
        queryInterfaceName = options.queryInterfaceName,
        /**
         * 列表api的method
         */
        gridApiMethod = options.gridApiMethod ? options.gridApiMethod : 'POST',
        /**
         * 是否强制初始化列表
         */
        initList = !_.isUndefined(options.initList) ? options.initList : true;

    $page.sort = !options.defaultSort ? 'id' : options.defaultSort;
    $page.order = !options.defaultOrder ? 'ASC' : options.defaultOrder;
    $scope.selectedValue = queryOptions[0].displayName;
    $scope.queryBy = queryBy = queryOptions[0].field;
    $scope.queryKey = queryKey;
    $scope.$page = $page;
    $scope.selectItems = $selectResolve ? ($selectResolve.selectItems ? $selectResolve.selectItems : []) : [];
    $scope.queryOptions = queryOptions;
    $scope.searchRegion = searchRegion;
    $scope.searchUserRegion = searchUserRegion;
    $scope.currentQueryParam = options.currentQueryParam ? options.currentQueryParam : {};
    $scope.multiSelect = multiSelect;

    $scope.queryTaleOptions = options.queryTaleOptions ? options.queryTaleOptions : [];


    $scope.queryByParam = function(queryBy, queryKey, config) {
        if (config.displayType === 'select') {
            /**
             * 下拉选择 处理方式
             */
            _.each(config.queryParams, function(param, index) {
                delete $scope.currentQueryParam[param.queryBy];
            });
            /**
             * queryKey为undefined则清空组件当前的查询条件
             */
            if (queryKey !== 'undefined' && typeof(queryKey) !== "undefined") {
                $scope.currentQueryParam[queryBy] = queryKey;
            }

        } else if (config.displayType === 'singleCheck') {
            /**
             *  单选是否 处理方式
             */
            if (typeof(queryKey) !== "undefined") {
                $scope.currentQueryParam[queryBy] = queryKey;
            } else {
                delete $scope.currentQueryParam[queryBy];
            }
        }
        $scope.innerQuery();
    };

    function orderPathFilter() {
        /**
         * //TODO 需要转移到m2-config里
         * @type {string[]}
         */
        var apiBaseUrlArray = [
            '/services/order',
            '/services/saleOrder',
            '/services/designOrder',
            '/services/factoryOrder',
            '/services/financialOrder',
            '/services/financialRecord',
            '/services/financialSupplement',
            '/services/changeOrder',
            '/services/purchases',
            '/services/inStorage',
            '/services/outStorage',
            '/services/installOrder'
        ];

        var urls = _.reject(apiBaseUrlArray, function(url) {
            return apiBaseUrl.indexOf(url) === 0;
        });

        return urls.length < apiBaseUrlArray.length;
    }

    if (orderPathFilter()) {
        $scope.isGetBySelf = lwj.appScopeMain.isGetBySelf;
    }


    $scope.viewBaseUrl = viewBaseUrl;
    /*列表排序组*/
    $scope.orderKeys = options.orderKeys;

    $scope.fixedListLimit = options.fixedListLimit;

    $scope.tdColspan = options.tdColspan;

    if ($selectModalInstance) {
        $page.limit = 10;
    }

    /** 获取APIurl参数方法 **/
    ths.getUrl = function(bUrl, method, params) {
        var baseUrl = [bUrl];
        baseUrl.push(method);
        if (typeof params === 'string') {
            baseUrl.push('/');
            baseUrl.push('params');
            return baseUrl.join('');
        }
        if (params instanceof Array) {
            for (var i = 0; i < params.length; i++) {
                baseUrl.push('/');
                baseUrl.push(params[i]);
            }
        }
        return baseUrl.join('');
    };


    /** 获取查询结果*/
    $scope.list = function(url) {
        if (!$scope.fixedListLimit) {
            $scope.fixedListLimit = {};
        }
        if ($scope.searchRegion && $scope.searchRegion.length > 0) {
            $scope.fixedListLimit.searchRegion = $scope.searchRegion;
        } else {
            delete $scope.fixedListLimit['searchRegion'];
        }
        if ($scope.searchUserRegion && $scope.searchUserRegion.length > 0) {
            $scope.fixedListLimit.searchUserRegion = $scope.searchUserRegion;
        } else {
            delete $scope.fixedListLimit['searchUserRegion'];
        }
        var u = typeof url !== 'undefined' ? url : ths.getUrl(apiBaseUrl, options.queryInterfaceName ? options.queryInterfaceName : 'list', [$page.limit, $page.page, $page.sort, $page.order, 'complex']);
        if ($scope.isGetBySelf === true || $scope.getBySelf) {
            $scope.fixedListLimit.getBySelf = $scope.isGetBySelf || $scope.getBySelf;
            $scope.fixedListLimit.isGetBySelf = $scope.fixedListLimit.getBySelf;
        } else {
            delete $scope.fixedListLimit['getBySelf'];
            delete $scope.fixedListLimit['isGetBySelf'];
        }
        $scope.queryComplex({}, u);
    };

    $scope.queryComplex = function(event, url) {
        var queryTarget = $scope.queryTarget || event.target;
        if (!$scope.queryTarget) {
            $scope.queryTarget = queryTarget;
        }
        /**
         * 基于模版的，所以能够用parent('div').parent('form');
         */
        var searchParam = {};
        if (queryTarget) {
            var searchForm = $(queryTarget).parent('div').parent('form');
            var inputs = $(searchForm[0]).find('input');
            var selects = $(searchForm[0]).find('select');

            _.each(inputs, function(value, index) {
                var type = $(value).attr('type');
                var fName = $(value).attr('name');
                var fValue = $(value).val();
                if (_.isEmpty(fValue)) {
                    return;
                }
                if (fName.endsWith('TimeStart') > 0 || fName.endsWith('TimeEnd') > 0) {

                    var date = new Date(fValue)
                    fValue = date.getTime();
                    fValue += date.getTimezoneOffset() * 60000;

                    if (fName.endsWith('TimeEnd') > 0) {
                        fValue += 24 * 3600 * 1000 - 1;
                    }
                }

                if (type == 'checkbox') {
                    if (!value.checked) {
                        return true;
                    }

                    if (_.isUndefined(searchParam[fName])) {
                        searchParam[fName] = [];
                    }
                    searchParam[fName].push(fValue);
                } else {
                    searchParam[fName] = fValue;
                }
            });

            /**
             * 查询条件为下拉框的处理
             */
            _.each(selects, function(value, index) {
                var fName = $(value).attr('name');
                if (!fName) {
                    return;
                }
                var fValue = $(value).val();
                if (!fValue || fValue.indexOf('undefined') >= 0) {
                    return;
                }
                var split = fValue.split(':');
                fValue = split[1];
                if (fName === 'orderStatusSelect') {
                    fName = fValue.split('.')[0];
                    fValue = fValue.split('.')[1];
                }
                if (split[0] === 'number') {
                    fValue = parseInt(fValue);
                }
                searchParam[fName] = fValue;
            });
        } else if (event.searchParam) {
            searchParam = event.searchParam;
        }

        if ($scope.fixedListLimit && !_.isEmpty($scope.fixedListLimit)) {
            searchParam = _.extend(angular.copy($scope.fixedListLimit), searchParam);
        }
        if ($scope.currentQueryParam && !_.isEmpty($scope.currentQueryParam)) {
            searchParam = _.extend(searchParam, $scope.currentQueryParam);
        }
        $scope.sortOrder = $page.order === 'ASC' ? $page.sort : '-' + $page.sort;
        var u = url || ths.getUrl(apiBaseUrl, queryInterfaceName ? queryInterfaceName : 'list', [$page.limit, $page.page, $page.sort, $page.order, 'complex']);

        $http({
            method: gridApiMethod,
            url: u,
            data: searchParam
        }).success(function(data) {
            delete $scope[pageDataBindingName];
            $scope[pageDataBindingName] = data;
            $scope.firstIndexOfPage = ($page.page - 1) * $page.limit + 1;
            $page.totalCount = $scope[pageDataBindingName].totalCount;
            $page.totalPages = $scope[pageDataBindingName].totalPages;
            $page.slider = $scope[pageDataBindingName].slider;
            if (typeof options.listCallback === 'function') {
                options.listCallback(data);
            }
        });
    };

    /**  简单查询 */
    $scope.query = function(q, qk) {
        /**
         * 如果是一个新的查询 页面跳转到第一页
         */
        if (q !== queryBy || qk !== queryKey) {
            $page.page = 1;
        }

        queryBy = q || '';
        queryKey = qk;

        queryBy = queryBy.endsWith('Time') ? queryBy + 'Start' : queryBy;

        if ($scope.queryTarget) {
            $scope.queryComplex();
        } else {
            if (!queryKey || $.trim(queryKey) === '') {
                //没有查询条件
                $scope.list(ths.getUrl(apiBaseUrl, queryInterfaceName ? queryInterfaceName : 'list', [$page.limit, $page.page, $page.sort, $page.order, 'complex']));
            } else {
                var param = {};
                param[queryBy] = queryKey;
                $scope.queryComplex({
                    'searchParam': param
                });
            }
        }

    };
    $scope.innerQuery = function() {
        $scope.query($scope.queryBy, $scope.queryKey);

    };
    $scope.getQueryBy = function() {
        return queryBy;
    };
    $scope.getQueryKey = function() {
        return queryKey;
    };

    /**  排序*/
    $scope.orderBy = function(sort, order) {
        $page.sort = sort.charAt(0) === '-' ? sort.substring(1, sort.length) : sort;
        $page.order = order;
        $scope.innerQuery();
    };
    $scope.goToPage = function($event) {
        var val = parseInt($($event.target).val());
        if (val && $event.keyCode === 13 && angular.isNumber(val)) {
            $scope.pageTo(val);
        }
    };
    /** 切换页码 */
    $scope.pageTo = function(pageNum) {
        if ($page.totalPages < pageNum) {
            return;
        }
        $page.page = pageNum;
        $scope.innerQuery();
    };

    /** 每页显示 */
    $scope.perPage = function() {
        $page.page = Math.floor($scope.firstIndexOfPage / $page.limit) + 1;
        $scope.innerQuery();
    };
    /** 查看详情 */
    $scope.toggleRowDetail = function(index) {
        if ($scope.showIndex === index) {
            $scope.showIndex = -1;
        } else {
            $scope.showIndex = index;
        }
    };
    /**  增*/
    $scope.create = function(url) {
        if (url) {
            $location.path(url);
            return;
        }
        $location.path(viewBaseUrl + 'create');
    };
    /**  改*/
    $scope.update = function(id) {
        $location.path(viewBaseUrl + 'update/' + id);
    };
    /** 详情*/
    $scope.detail = function(id) {
        $location.path(viewBaseUrl + 'detail/' + id);
    };
    /**  删*/
    $scope.remove = function(id, version) {
        modalInstance = $modal.open({
            templateUrl: 'dialog.delete.confirm.html',
            controller: 'dialog.simple.ctrl',
            scope: $scope.$new(true),
            backdrop: true,
            resolve: {
                resolve: function() {
                    return id;
                }
            }
        }).result.then(function(id) {
            $http({
                method: 'post',
                url: ths.getUrl(apiBaseUrl, 'delete', [id, version])
            }).success(function(data) {
                var msg = data.messages;
                if (data.code > 0) {
                    if (msg.serverInternal) {
                        lwj.openErrorAlertDialog($scope, $modal, "服务器返回错误", msg.serverInternal.$srvmessage);
                    }
                } else {
                    $scope.innerQuery();
                }
            });
        });
    };

    $scope.selectAll = function(event) {
        if (_.isUndefined($scope[pageDataBindingName])) {
            return;
        }
        $scope.selectItems = [];
        if (event.target.checked !== false) {
            _.each($scope[pageDataBindingName].items, function(item, index) {
                $scope.selectItems.push(item);
            });
        }
    };

    $scope.isSelectedAllItem = function() {
        if (_.isUndefined($scope[pageDataBindingName])) {
            return;
        }
        _.each($scope[pageDataBindingName].items, function(item, index) {
            $scope.isSelectedItem(item);
        });
    };

    $scope.select = function(obj, evn) {

        if (evn.target.checked === false) {
            $scope.selectItems = _.reject($scope.selectItems, function(item) {
                return item['id'] === obj['id'];
            });
        } else {
            if (multiSelect) {
                $scope.selectItems = _.reject($scope.selectItems, function(item) {
                    return item['id'] === obj['id'];
                });
                $scope.selectItems.push(obj);
            } else {
                $scope.selectItems[0] = obj;
                if (lastSelectTarget) {
                    lastSelectTarget.checked = false;
                }
            }
        }
        lastSelectTarget = evn.target;
    };

    $scope.isSelectedItem = function(obj) {
        return _.find($scope.selectItems, {
            id: obj['id']
        });
    };

    $scope.ok = function() {
        $selectModalInstance.close($scope.selectItems);
    };
    $scope.cancel = function() {
        $selectModalInstance.dismiss("cancel");
    };

    if (options.noInitList) {
        return;
    }

    if ((!modalInstance || options.selectInitList) && initList) {
        $scope.list();
    }
};

/***
 *
 *     封装  订单的增删改查的操作 */
let updateFunc = function($scope, $http, $location, options, $modal, $selectModalInstance) {

    var
    /**
     * 表单数据绑定的名称
     * @type {options.dataName|*}
     */
        dataName = options.dataName,
        /**
         * 编辑页面，需要展示其他列表的内容
         */
        viewId = !options.viewId ? '' : options.viewId,
        /**
         * [viewName description] 要暂时的view数据名称
         * @type {[type]}
         */
        viewDataName = options.viewDataName,
        /**
         * 如果是修改，一般都需要数据的id，
         * 如果是新建，则id为空
         */
        id = !options.id ? '' : options.id,
        /**
         * 根据url参数是否传递id值判断是更新还是创建实体
         * @type {boolean}
         */
        isUpdate = id !== '',

        /**
         * 表单的名称
         * @type {options.formName|*}
         */
        formName = options.formName ? options.formName : (options.dataName + "Form"),
        /**
         * 需要提交的字段
         */
        formFields = options.formFields,
        /**
         * API的基地址
         * 需要按照后台的规范进行编写
         * GET  /entity/list
         * PUT  /entity/create
         * PUT  /entity/update
         * POST /entity/delete
         */
        apiBaseUrl = options.apiBaseUrl.charAt(options.apiBaseUrl.length - 1) === '/' ? options.apiBaseUrl : options.apiBaseUrl + '/',
        /**
         * 根据isUpdate生成表单提交地址
         */
        submitUrl,
        /**
         * 一份原始数据的拷贝，用于reset
         * @type {{}}
         */
        master = {},

        emptyDetail = options.emptyDetail,
        /**
         * 用于弹出对话框
         *返回更新后的
         */
        resultItem = {},
        /**
         *自定义list查询接口名，如果未定义 使用默认接口名"list"
         */
        detailInterfaceName = options.detailInterfaceName,
        /**
         * api的method
         */
        viewApiMethod = options.viewApiMethod ? options.viewApiMethod : 'GET',
        updateApiMethod = options.updateApiMethod ? options.updateApiMethod : 'POST',
        detailApiMethod = options.detailApiMethod ? options.detailApiMethod : 'POST';

    var _status = $location.path().match(/\/\d*\/(update|create)/g);
    if (_status !== null) {
        $scope.status = parseInt(_status[0].match(/\d*/g)[1]);
    }

    $scope.submiting = false;

    $scope.resultItem = resultItem;

    $scope.openDatePicker = lwj.openDatePicker;

    $scope.reset = function() {
        angular.copy(master, $scope[dataName]);
    };

    if (typeof options.appendProgress === 'function') {
        options.appendProgress($scope, $http, options);
    }

    $scope.isUnchanged = function(module) {
        return angular.equals(module, master);
    };

    $scope.setFormDirty = function() {
        if ($scope[formName]) {
            $scope[formName].$setDirty();
        }
    };

    $scope.canSubmit = function() {
        if (!$scope[formName]) {
            return false;
        }
        //            console.log({'valid': $scope[formName].$valid,
        //                        'submiting': $scope.submiting,
        //                        'changed': !$scope.isUnchanged($scope[dataName]),
        //                        '$dirty': $scope[formName].$dirty});
        return $scope[formName].$valid && !$scope.submiting && !$scope.isUnchanged($scope[dataName]) && $scope[formName].$dirty;
    };

    $scope.detail = function() {
        if (emptyDetail) {
            $scope[dataName] = {};
            angular.copy({}, master);
            return;
        }

        $http({
            method: detailApiMethod,
            url: apiBaseUrl + (detailInterfaceName ? detailInterfaceName : "detail") + "/" + id
        }).success(function(_data) {
            var data = _data.result ? _data.result : _data;
            // 先赋值给scope
            $scope[dataName] = data;

            if (typeof options.formatDetailData === 'function') {
                options.formatDetailData(data);
            }

            data = _.omit(data, function(value, key, object) {
                if (key.endsWith('Time')) {
                    return (!value || value === '0' || value === 0 || value < 0 || value === '1970-01-01');
                } else {
                    return false;
                }
            });

            if (typeof data.status !== 'undefined') {
                if ($scope.status != parseInt(data.status)) {
                    var path = $location.path();
                    path = path.replace(/\/\d{1,2}\//g, '/' + parseInt(data.status) + '/');
                    $location.path(path).replace();
                }
            }

            angular.copy(data, master);
        });
    };

    var getViewData = function(viewId, viewDataName) {
        $http({
            method: viewApiMethod,
            url: options.viewDataUrl + (detailInterfaceName ? detailInterfaceName : "detail") + "/" + viewId
        }).success(function(_data) {
            var data = _data.result;
            if (typeof options.initViewData === 'function') {
                options.initViewData(data);
            }

            data = _.omit(data, function(value, key, object) {
                if (key.endsWith('Time')) {
                    return (!value || value === '0' || value === 0 || value < 0 || value === '1970-01-01');
                } else {
                    return false;
                }
            });

            if (typeof data.status !== 'undefined') {
                if ($scope.status != parseInt(data.status)) {
                    var path = $location.path();
                    path = path.replace(/\/\d{1,2}\//g, '/' + parseInt(data.status) + '/');
                    $location.path(path).replace();
                }
            }
            $scope[viewDataName] = data;
        });
    };

    if (viewId) {
        getViewData(viewId, viewDataName);
    }

    if (isUpdate) {
        $scope.isUpdate = true;
        $scope.detail();
        if (typeof options.updateApiBaseUrl === 'function') {
            submitUrl = options.updateApiBaseUrl() + "update";
        } else {
            submitUrl = apiBaseUrl + "update";
        }

    } else {
        $scope.isUpdate = false;
        $scope[dataName] = {};

        if (typeof options.formatDetailData === 'function') {
            options.formatDetailData($scope[dataName]);
        }

        // 添加一个初始化表单值得方法
        if (typeof options.initFormData === 'function') {
            options.initFormData($scope[dataName]);
        }

        angular.copy($scope[dataName], master);

        if (typeof options.createApiUrl === 'function') {
            submitUrl = options.createApiUrl();
        } else {
            if (typeof options.createApiBaseUrl === 'function') {
                submitUrl = options.createApiBaseUrl() + "create";
            } else {
                submitUrl = apiBaseUrl + "create";
            }
        }
    }

    /**
     * 如果返回的是Success则刷新该页面；
     * 一般的如果返回的都是更新实体的ID
     * @param data
     */
    $scope.onSuccessResultStringHandler = function(data) {
        if (data.result === "Success") {
            $location.path($location.path() + "/").replace();
        } else {
            if (typeof options.getRediectUrl === 'function') {
                updateUrl = options.getRediectUrl();
            } else {
                /*去更新页面*/
                var updateUrl = $location.path().replace(/create/g, 'update');
                var lastChar = updateUrl.charAt(updateUrl.length - 1);
                updateUrl = lastChar === '/' ? updateUrl : (updateUrl + '/');
                updateUrl = updateUrl + data.result;
            }
            $location.path(updateUrl).replace();
        }
    };

    $scope.onSuccessResultObjectHasIdHandler = function(data) {
        if ($selectModalInstance) {
            angular.copy(data['result'], resultItem);
            $scope.ok();
        } else {
            $scope.onSuccessResultStringHandler({
                result: data.result['id']
            });
        }
    };

    $scope.ok = function(obj) {
        if (obj) {
            $selectModalInstance.close(obj);
        } else {
            $selectModalInstance.close(resultItem);
        }
    };
    $scope.cancel = function() {
        $selectModalInstance.dismiss("cancel");
    };
    $scope.checkPermission = function() {
        var checked = false;
        _.each(arguments, function(val) {
            if (lwj.appScopeMain.checkPermission(val)) {
                checked = true;
            }
        });
        return checked;
    };
    /**
     *提交修改或添加
     **/
    $scope.submit = function(formData) {

        var submitData = {};

        $scope.submiting = true;

        var formatedFormData = angular.copy(formData);

        if (typeof options.beforeSubmit === 'function') {
            var can = options.beforeSubmit(formatedFormData);
            if (!can) {
                $scope.submiting = false;
                return;
            }
        }

        if (typeof options.formatSubmitData === 'function') {
            options.formatSubmitData(formatedFormData);
        }

        _.each(formFields, function(value) {
            var theVal = formatedFormData[value];
            if (!_.isNaN(theVal) && !_.isNull(theVal) && !_.isUndefined(theVal)) {
                submitData[value] = theVal;
            }
        });

        if (_.isEmpty(submitData)) {
            return;
        }

        if (typeof options.getSubmitUrl === 'function') {
            submitUrl = options.getSubmitUrl(submitUrl);
        }
        if (submitUrl && submitUrl.indexOf('update') > -1 && submitUrl.indexOf('?status=') < 0) {
            //submitUrl += "?status=" + $scope.status;
        }
        $http({
            method: updateApiMethod,
            url: submitUrl,
            data: submitData,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).success(function(data) {
            if (data.code > 0) {
                $scope.submiting = false;
                var form = $scope[formName];
                /**
                 * 后台服务专门为angularjs返回的结果对象
                 * 便于在页面上呈现
                 * 但必须给每个input一个name
                 */
                angular.forEach(data.messages, function(value, key) {
                    if (!form || !form[key]) {} else {
                        form[key].$valid = value.$valid;
                        form[key].$invalid = value.$invalid;
                        form[key].$errorCode = value.$errorCode;
                        form[key].$setValidity('$srverror', value.$srverror);
                        form[key].$srvmessage = value.$srvmessage;
                        /*纪录已经有过的错误*/
                        if (!form[key].$errorValues) {
                            form[key].$errorValues = [];
                        }
                        form[key].$errorValues.push(formData[key]);
                    }
                });
                /**
                 * 服务器错误回调函数
                 */
                if (typeof options.onError === 'function') {
                    options.onError($scope, data);
                } else {
                    lwj.serverErrorAlertFunc($scope, $modal, data);
                    if (typeof options.onErrorAlert === 'function') {
                        options.onErrorAlert($scope, data);
                    }
                }
            } else {
                if (typeof submitData.version !== 'undefined') {
                    submitData.version++;
                }
                /**
                 * 服务调用成功的回调函数
                 */
                if (typeof options.onSuccess === 'function') {
                    options.onSuccess($scope, data, submitData);
                } else {
                    if (_.isString(data.result)) {
                        $scope.onSuccessResultStringHandler(data);
                    } else if (_.isEmpty(data.result) || _.isNaN(data.result) || _.isNull(data.result) || _.isUndefined(data.result)) {
                        lwj.openSuccessAlertDialog($scope, $modal, '操作成功', '服务器没有更多返回信息');
                    } else if (_.isObject(data.result) && _.isString(data.result['id'])) {
                        $scope.onSuccessResultObjectHasIdHandler(data);
                    } else {
                        //TODO:
                        lwj.openSuccessAlertDialog($scope, $modal, '操作成功', angular.toJson(data.result));
                    }
                }
            }
        }).error(function(request) {
            /**
             * 服务器异常，通常都是 404，403，500
             * @type {boolean}
             */
            $scope.submiting = false;
            if (typeof options.onException === 'function') {
                options.onException(scope, request);
            } else {
                console.log("server return exception:" + request);
            }
        });
        //让服务器返回的异常能偶有机会得到刷新
        var form = $scope[formName];
        _.each(formFields, function(field) {
            if (typeof $scope[dataName][field] !== 'undefined') {
                var exp = dataName + '.' + field;
                $scope.$watch(exp, function(newVal, oldVal) {
                    if (!form[field]) {
                        return;
                    }
                    if ($.inArray(newVal, form[field].$errorValues) >= 0) {
                        //还有错
                        form[field].$setValidity('$srverror', false);
                        return;
                    }
                    if (!$scope[dataName] || !$scope[dataName][field] || newVal !== oldVal) {
                        if (typeof form[field].$error.$srverror !== 'undefined') {
                            form[field].$setValidity('$srverror', true);
                        }
                    }
                });
            }
        });
    };
};


export default {gridFunc,updateFunc};
export {gridFunc,updateFunc};