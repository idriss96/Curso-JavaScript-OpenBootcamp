// 26. Imprimir una matriz

// Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

// escribe tu función acá
const imprimirMatriz = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < arr[i].length; a++) {
      console.log(arr[i][a]);
    }
  }
};

// código de prueba
console.log(
  imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
