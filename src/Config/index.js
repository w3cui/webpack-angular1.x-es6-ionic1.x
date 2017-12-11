import ServicePhpApi from './lwj-services-php-api';

const Constant = ($app) => {
	/*
	 * 列表分页配置
	 * 分页配置	
	*/
	$app.constant('pageNationConfig', {
		page: 1,
		limit: 30,
		firstRecord: 1,
		sort: 'id',
		order: 'ASC',
		limitArray: [10, 20, 30, 50]
	});
};

export default {
	phpApi: ServicePhpApi,
	constant: Constant
};

export {
	Constant,
	ServicePhpApi
};