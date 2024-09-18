// 25. Encontrar palabras que terminan en "s"

// Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

// escribe tu función acá
const terminanConS = (arr) => {
  const list = arr.filter((a) => a[a.length - 1] === 's' || a[a.length - 1] === 'S');
  return list;
};

// código de prueba
console.log(terminanConS(['pruebas', 'arroz', 'árbol', 'tokens'])); // ["pruebas", "tokens"]
console.log(terminanConS(['beta', 'delta', 'gama'])); // []
console.log(terminanConS([])); // []
