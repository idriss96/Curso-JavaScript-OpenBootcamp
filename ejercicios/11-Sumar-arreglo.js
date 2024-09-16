// 11. Sumar arreglo

// Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

// escribe tu respuesta acá
const sumarArreglo = (arr) => {
  let totalSum = 0;
  for (let i = 0; i <= arr.length; i++) {
    totalSum += i;
  }

  return totalSum;
};

// código de prueba
console.log(sumarArreglo([3, 1, 2])); // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArreglo([])); // 0
