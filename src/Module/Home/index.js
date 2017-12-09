/*
 *	@tql 2017/12/08
 *	这里是当前页面的控制器与服务集成
 */

import homeController from './controller';
import homeServices from './services';

export default (lwj) => {
	return lwj.controller(...homeController)
	.factory(...homeServices);
}