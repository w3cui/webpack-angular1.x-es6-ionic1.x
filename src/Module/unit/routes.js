import update from './view/form.html';
import grid from './view/grid.html';
import {getRedux,readRedux} from '../../Redux';

const state = [
  ['unit_grid', { 
    url: '/unit/grid', 
    template: grid, 
    controller: 'module.unit.grid.controler', 
  }],
  ['unit_update', { 
    url: '/unit/update/:id', 
    template: update,
    controller: 'module.unit.update.controler', 
  }],
];

// 存储路由数据
export default getRedux(state,{type:"ROUTES"});
