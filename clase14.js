var joshua = {
  nombre: 'Joshua',
  apellido: 'Orellana',
  edad: 23,
  peso: 75
}

console.log(`Al inicio del año ${joshua.nombre} pesa ${joshua.peso}kg.`);

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365
const META = joshua.peso - 3

const aumentarDePeso = (persona) => {
  return persona.peso += INCREMENTO_PESO
}

const adelgazar = (persona) => {
  return persona.peso -= INCREMENTO_PESO
}

const comeMucho = () => {
  return Math.random() < 0.3
}

const realizaDeporte = () => {
  return Math.random() < 0.4
}

var dias = 0

while (joshua.peso > META) {
  if (comeMucho()) {
    //aumentoDePeso
    aumentarDePeso(joshua)
  }

  if (realizaDeporte()) {
    //adelgazar
    adelgazar(joshua)
  }

  dias++
}

//Loop For
// for(var i = 1; i <= DIAS_DEL_ANIO; i++) {
//   var random = Math.random()
//
//   if(random < 0.25){
//     //aumentaDePeso
//     aumentarDePeso(joshua)
//   }
//   else if(random < 0.5) {
//     //adelgazar
//     adelgazar(joshua)
//   }
// }

console.log(`Pasaron ${dias} dias hasta que ${joshua.nombre}, adelgazo 3kg.`);
