var joshua = {
  nombre: 'Joshua',
  apellido: 'Orellana',
  edad: 23,
  peso: 75
}

console.log(`Al inicio del año ${joshua.nombre} pesa ${joshua.peso}kg.`);

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = (persona) => {
  return persona.peso += INCREMENTO_PESO
}

const adelgazar = (persona) => {
  return persona.peso -= INCREMENTO_PESO
}

for(var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random()

  if(random < 0.25){
    //aumentaDePeso
    aumentarDePeso(joshua)
  }
  else if(random < 0.5) {
    //adelgazar
    adelgazar(joshua)
  }
}

console.log(`Al final del año ${joshua.nombre}, pesa ${joshua.peso.toFixed(1)}kg.`);
