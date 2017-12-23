import angular from 'angular';
import uirouter from 'angular-ui-router';


import Routes from './Routes/';
import Directive from './Directive/';
import Module from './Module/';
import Config , {Constant,ServicePhpApi} from "./Config/";
import {getRedux,readRedux} from './Redux'; 

const lwj = angular.module('lwj', ['ionic',uirouter])
	.provider(...Routes.provider)
	.config(Routes.config)
	.run(Routes.run);

// 注入 directive 
Directive(lwj);

// 注入 module
Module(lwj);

// 注入统一配置
Constant(lwj);

// 记录app
getRedux(lwj,{type:"APP"});