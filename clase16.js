var signo = prompt('¿Cual es tu signo zodiacal?')

switch (signo.toLowerCase()) {
  case 'aries':
      console.log('aries');
    break;
  case 'cancer':
  case 'cáncer':
      console.log('cancer');
    break;
  default:
    console.log('no es un signo válido');
}
