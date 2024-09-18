// 21. Encontrar números pares en un arreglo

// Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

// escribe tu función acá
const pares = (arr) => {
  const parList = arr.filter((a) => a % 2 === 0);

  return parList;
};

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []
