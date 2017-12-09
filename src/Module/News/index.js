/*
 *	@tql 2017/12/08
 *	这里是当前页面的控制器与服务集成
 */

import newsController from './controller';
import newsServices from './services';
import newsServices2 from '../Home/services';


export default (lwj) => {
	return lwj.controller(...newsController)
	.factory(...newsServices).
	factory(...newsServices2);
}