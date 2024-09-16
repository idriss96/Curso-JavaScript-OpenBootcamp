// 12. Multiplicar arreglo

// Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

// escribe tu respuesta acá
const multiplicarArreglo = (arr) => {
  let totalMulti = 1;
  for (let i = 0; i < arr.length; i++) {
    totalMulti *= arr[i];
  }
  return totalMulti;
};

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1
