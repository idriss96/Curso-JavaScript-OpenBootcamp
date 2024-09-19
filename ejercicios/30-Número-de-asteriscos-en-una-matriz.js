// 30. Número de asteriscos en una matriz

// Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

// escribe tu función acá
const numAsteriscos = (arr) => {
  let totalAst = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < arr[i].length; a++) {
      if (arr[i][a] === '*') {
        totalAst++;
      }
    }
  }
  return totalAst;
};

// código de prueba
console.log(
  numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*'],
  ])
);
// 5
