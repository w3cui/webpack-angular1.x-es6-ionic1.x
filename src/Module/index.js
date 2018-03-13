/*
 *	@tql 2017/12/08
 *	在这里注入所有页面的控制器于服务
 */

import Home from './Home/';
// import News from './News/';
import Unit from "./Unit/";
export default (lwj) => {
	Home(lwj);
	// News(lwj);
	Unit(lwj);
}