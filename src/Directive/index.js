import Dir1 from './Dir1/';
// import Dir2 from './Dir2/index';
module.exports = (lwj) => {
  return lwj.directive(...Dir1);//.directive(Dir2);
}