// 31. Distancia entre dos strings

// Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

// Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo,
//  si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

// escribe tu función acá
const distancia = (str_1, str_2) => {
  let totalDef = 0;
  for (let i = 0; i <= str_1.length; i++) {
    if (str_1[i] !== str_2[i]) {
      totalDef++;
    }
  }
  return totalDef;
};
// código de prueba
console.log(distancia('hola', 'hola')); // 0
console.log(distancia('sol', 'tol')); // 1
console.log(distancia('carro', 'correr')); // 3
