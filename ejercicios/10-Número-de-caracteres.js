// 10. Número de caracteres

// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter).
// La función debe retornar el número de veces que aparece el caracter en el string.

// escribe tu respuesta acá
const numeroDeCaracteres = (str, letter) => {
  const arr = str.split('');
  const total = arr.filter((a) => a === letter);

  return total.length;
}

const e = "e";
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4
