/*
 * 列表分页配置
 * 分页配置	
*/
export default ($app) => {
	$app.constant('pageNationConfig', {
		page: 1,
		limit: 30,
		firstRecord: 1,
		sort: 'id',
		order: 'ASC',
		limitArray: [10, 20, 30, 50]
	});
};