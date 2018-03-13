/*
 * @name:tql
 * 共享数据存储处理
 */
 
// import * as _ from 'lodash';

let reduxScope = {};

/*
 * 存储数据
 * @scope => 数据存储
 * @action => 参数
 */
 const getRedux = (scope, action) => {
	reduxScope[action.type] = reduxScope[action.type] || [];
  reduxScope[action.type] = reduxScope[action.type].length != 0 ? [...reduxScope[action.type],...scope] : scope;
  return reduxScope;
};

/*
 * 读取数据
 * @action => 参数
 */
 const readRedux = (action) => {
  return reduxScope[action.type];
}

/*
 * 消耗数据
 * @action => 参数
 */
 const removeRedux = (action) => {
  _.remove(reduxScope,(n) => {
    return n.type == action.type;
  });
  return reduxScope;
}

/*
 * 消耗数据
 * @action => 回调
 * @success => 监听回调
 */
 const watchRedux = (action,success) => {
  setInterval(()=>{
  	
  },1000);
  return reduxScope;
}

export {
  getRedux,
  readRedux,
  removeRedux,
  watchRedux
};