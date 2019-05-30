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

imprimirProfesiones(joshua)
