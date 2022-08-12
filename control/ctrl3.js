  var length = document.getElementsByClassName('calc__input').length;
  for (i = 0; i < length; i++){
    document.getElementsByClassName('calc__input')[i].type = 'number';
    document.getElementsByClassName('calc__input')[i].id = 'calc_C' + i + 2;
  }