/*
 *	@tql 2017/12/08
 *	这里是当前页面的控制器与服务集成
 */
import grid from './controller/list';
import update from './controller/update';
import services from './service/unit';
import routes from './routes';
import {
	getRedux,
	readRedux
} from '@/Redux';

export default (lwj) => {
	let app = readRedux({
		type: "APP"
	});
	return app.controller(...grid)
	.controller(...update)
	.factory(...services);	
	routes();
}