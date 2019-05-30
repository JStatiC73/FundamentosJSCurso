var joshua = {
  nombre: 'Joshua',
  apellido: 'Orellana',
  edad: 23
}

var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona) {
  //Hola, me llamo nombre y tengo x años
  console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`);
}

imprimirNombreEnMayusculas(joshua)
imprimirNombreEnMayusculas(dario)
imprimirNombreYEdad(joshua)
imprimirNombreYEdad(dario)
