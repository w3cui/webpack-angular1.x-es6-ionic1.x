let APP = {};
APP.API = APP.API || {};
APP.API.com = APP.API.com || {};
APP.API.com.php = APP.API.com.php || {};
APP.API.com.php.home = APP.API.com.php.home || {};

APP.API.com.php.pmc = APP.API.com.php.pmc || {};


APP.API.com.php.home.IndexController = ($http) => {
    return {
        getStoreDetail : (id, successCallBack, errorCallBack) => {
            http($http, '/cms/andaren/content/detail/' + id, {}, successCallBack, errorCallBack, "GET");
        }
    }
};

// 可视化编辑交互地址
APP.API.com.php.pmc.IndexController = ($http) => {
    return {
        getModularList : (id, successCallBack, errorCallBack) =>{
            http($http, 'api/modular/list', {}, successCallBack, errorCallBack, "GET");
        },
        getModularViewList : (id, successCallBack, errorCallBack) =>{
            http($http, 'api/modular/view/list', {}, successCallBack, errorCallBack, "POST");
        },
    }
};

export default APP;

/**
 * 发起HTTP请求
 * @param $http
 * @param url
 * @param data
 * @param successCallBack
 * @param errorCallBack
 * @param method
 */
function http($http, url, data, successCallBack, errorCallBack, method) {
    method = method || 'PUT';
    var params = {
        method: method.toUpperCase(),
        // 配置api代理
        url: "https://result.eolinker.com/B7hctqTb702bbc604f0da172f3daace6519bd929e93fae2?uri=" + url
    };

    if (params.method === 'GET') {
        params.params = data;
    } else {
        params.data = data;
    }

    $http(params).success(function(data) {
        if (data.code > 0) {
            if (typeof errorCallBack === 'function') {
                errorCallBack(data);
            } else {
                defaultErrorCall(data, $modal);
            }
        } else {
            if (typeof successCallBack === 'function') {
                successCallBack(data);
            } else {
                defaultCall(data);
            }
        }
    }).error(function(data) {

        if (typeof errorCallBack === 'function') {
            errorCallBack(data);
        } else {
            defaultErrorCall(data, $modal);
        }
    })
}

// 默认提示
const defaultErrorCall = (data) => {
        alert(data);
    }
    // 默认提示
const defaultCall = (data) => {
    alert(data);
}