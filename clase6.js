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

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(joshua)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'Pepito'})
