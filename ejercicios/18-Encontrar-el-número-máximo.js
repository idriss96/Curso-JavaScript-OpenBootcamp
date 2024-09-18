// 18. Encontrar el número máximo

// Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

// Nota: Intentarlo hacer sin el método Math.max de JavaScript.

// escribe tu función acá
const max = (arr) => {
  let higNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > higNum) {
      higNum = arr[i];
    }
  }

  return higNum;
};
// código de prueba
console.log(max([3, 9, 6])); // 9
console.log(max([67, 35, 54, 26])); // 67
console.log(max([5, 9, 2, 4, 5, 7])); // 9
