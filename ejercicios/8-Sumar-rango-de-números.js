// 8. Sumar rango de números

// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

// escribe tu respuesta acá
const sumarRango = (num1, num2) => {
  let total = 0;
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      total += i;
    }
  } else if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      total += i;
    }
  }
  return total;
};

// código de prueba
console.log(sumarRango(10, 0)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0
