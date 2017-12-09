module.exports = ['derDome', [() => {
    return {
      restrict: 'AE',
      link: (scope, iElement, iAttrs) => {
        console.log("directive",iElement);
      }
    };
  }]
];