// 19. Encontrar el número mínimo

// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

// Nota: Intentarlo hacer sin el método Math.min de JavaScript.

// escribe tu función acá
const min = (arr) => {
  let minNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }

  return minNum;
};

// código de prueba
console.log(min([3, 9, 6])); // 3
console.log(min([67, 35, 54, 26])); // 26
console.log(min([5, 9, 2, 4, 5, 7])); // 2
