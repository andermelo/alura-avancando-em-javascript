'use strict';

System.register(['./controllers/NegociacaoController', './polyfill/fetch'], function (_export, _context) {
  "use strict";

  var currentInstace, negociacaoController;
  return {
    setters: [function (_controllersNegociacaoController) {
      currentInstace = _controllersNegociacaoController.currentInstace;
    }, function (_polyfillFetch) {}],
    execute: function () {
      negociacaoController = currentInstace();


      document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map