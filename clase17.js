var joshua = {
  nombre: 'Joshua',
  apellido: 'Orellana',
  altura: 1.72
}

var alan = {
  nombre: 'Alan',
  apellido: 'Pérez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barrios',
  altura: 1.76
}

var personas = [joshua, alan, martin, dario, vicky, paula]

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura}mts.`)
}
