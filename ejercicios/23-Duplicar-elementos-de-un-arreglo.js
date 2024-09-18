// 23. Duplicar elementos de un arreglo

// Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

// escribe tu función acá
const duplicar = (arr) => {
  const dupList = arr.map((a) => a * 2);
  return dupList;
};

// código de prueba
console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []
