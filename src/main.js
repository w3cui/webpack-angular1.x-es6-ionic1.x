import angular from 'angular';
import uirouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import angularDrag from 'angular-dragdrop';
import '@/Style/main.less';

import Routes from './Routes/';
import Directive from './Directive/';
import Module from './Module/';
import Config , {Constant,ServicePhpApi} from "./Config/";
import {getRedux,readRedux} from './Redux';
const app = angular.module('myApp', [uirouter,uiBootstrap])
	.provider(...Routes.provider)
	.config(Routes.config)
	.run(Routes.run);
	
// 记录app
getRedux(app,{type:"APP"});

// 注入 directive 
Directive(app);

// 注入 module
Module(app);

// 注入统一配置
Constant(app);

