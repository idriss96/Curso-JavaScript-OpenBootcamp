// 22. Encontrar posiciones de números pares

// Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.

// escribe tu función acá
const posiciones = (arr) => {
  const posList = arr.filter((a) => a % 2);
  return posList;
};

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(posiciones([])); // []
