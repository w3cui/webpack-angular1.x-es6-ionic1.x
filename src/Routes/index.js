import home from '../Module/Home/home-grid.html';
import news from '../Module/News/news-grid.html';
const state = [
  ['home', { // 这个是路由名称
    url: '/', // 这个是url
    template: home, // 这个是模板位置
    controller: 'module.home.controler', // 这个是对应模板的controller名称！记住是名称不是位置
  }],
  ['news', {
    url: '/news',
    template: news,
    controller: 'module.news.controler.grid',
  }],
];
export default ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  state.forEach((value) => {
    $stateProvider.state(...value);
  })
  $urlRouterProvider.otherwise('/');
}];