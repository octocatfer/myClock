window.onload = function() {
  var reloj = document.getElementById('reloj');
  var hB = document.getElementById('horasBarra');
  var mB = document.getElementById('minutosBarra');
  var sB = document.getElementById('segundosBarra');

  hB.max = '23';
  mB.max = '59';
  sB.max = '59';

  setInterval(function() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var ap = (hora < 12) ? 'a.m.' : 'p.m.';

    hB.value = hora;
    mB.value = minutos;
    sB.value = segundos;

    switch (hora) {
      case 13: hora = 1; break;
      case 14: hora = 2; break;
      case 15: hora = 3; break;
      case 16: hora = 4; break;
      case 17: hora = 5; break;
      case 18: hora = 6; break;
      case 19: hora = 7; break;
      case 20: hora = 8; break;
      case 21: hora = 9; break;
      case 22: hora = 10; break;
      case 23: hora = 11; break;
      case 0: hora = 12; break;
    }

    if (minutos < 10) {
      minutos = '0' + minutos;
    }
    
    if (segundos < 10) {
      segundos = '0' + segundos;
    }
    
    reloj.innerText = hora + ':' + minutos + ' ' + ap;
  }, 1000);
}