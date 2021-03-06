var joshua = {
  nombre: 'Joshua',
  apellido: 'Orellana',
  edad: 23,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var emanuel = {
  nombre: 'Emanuel',
  apellido: 'Orellana',
  edad: 15,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `)
  if(persona.ingeniero)
    console.log('Ingeniero')
  else
    console.log('No es ingeniero');

  if(persona.cocinero)
    console.log('Cocinero');

  if(persona.cantante)
    console.log('Cantante');

  if(persona.dj)
    console.log('DJ');

  if(persona.guitarrista)
    console.log('Guitarrista');

  if(persona.drone)
    console.log('Piloto de Drone');
}

const MAYORIA_DE_EDAD = 18

//asignar una funcion a una variable
// const esMayorDeEdad = function (persona){
//   return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = (persona) => {
  return persona.edad >= MAYORIA_DE_EDAD
}

const permitirAcceso = (persona) => {
  return esMayorDeEdad(persona) ? console.log('ACCESO CONCEDIDO') : console.log('ACCESO DENEGADO')
}

function imprimirSiEsMayorDeEdad(persona){
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad.`);
  }
  else {
    console.log(`${persona.nombre} es menor de edad.`);
  }
}

// function permitirAcceso(persona) {
//   if(!esMayorDeEdad(persona)){
//     console.log('ACCESO DENEGADO');
//   }
// }

//imprimirProfesiones(joshua)
