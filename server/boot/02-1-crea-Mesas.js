'use strict';

module.exports = function (app, cb) {

  app.models.Mesa.create([{
    nombreAula: 'Aula 1',
    numFila: 1,
    numColumna: 1,
    imageM: 'assets/mesa1.png'
  }, {
    nombreAula: 'Aula 1',
    numFila: 2,
    numColumna: 4,
    imageM: 'assets/mesa3.png'
  }, {
    nombreAula: 'Aula 2',
    numFila: 1,
    numColumna: 6,
    imageM: 'assets/mesa2.png'
  }], function (err) {

    if (err) throw err;
    process.nextTick(cb);
  });
};

