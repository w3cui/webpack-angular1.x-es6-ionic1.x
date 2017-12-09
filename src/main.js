import angular from 'angular';
import uirouter from 'angular-ui-router';


import Routes from './Routes/';
import Directive from './Directive/';
import Module from './Module/';



const lwj = angular.module('lwj', ['ionic',uirouter])
					.config(Routes);

// 注入 directive 
Directive(lwj);

// 注入 module
Module(lwj);

export default lwj;