// 6. FizzBuzz

// Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

// "fizz" si el número es múltiplo de 3.
// "buzz" si el número es múltiplo de 5.
// "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

// escribe tu respuesta acá
const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzbuzz');
  } else if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(num);
  }
};
// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8
