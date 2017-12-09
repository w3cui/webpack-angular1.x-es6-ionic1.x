let lwj = {};
lwj.API = lwj.API || {};
lwj.API.com = lwj.API.com || {};
lwj.API.com.php = lwj.API.com.php || {};
lwj.API.com.php.home = lwj.API.com.php.home || {};


lwj.API.com.php.home.IndexController = ($http) => {
    return {
        getStoreDetail : (id, successCallBack, errorCallBack) => {
            http($http, '/cms/andaren/content/detail/' + id, {}, successCallBack, errorCallBack, "GET");
        }
    }
};

export default lwj;

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
        url: url
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