// 24. Encontrar palabras que empiecen por "a"

// Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

// escribe tu función acá
const empiezanConA = (arr) => {
  const list = arr.filter((a) => a[0] === 'a' || a[0] === 'A');
  return list;
};

// código de prueba
console.log(empiezanConA(['beta', 'alfa', 'Arbol', 'gama'])); // ["alfa", "Arbol"]
console.log(empiezanConA(['beta', 'delta', 'gama'])); // []
console.log(empiezanConA([])); // []
