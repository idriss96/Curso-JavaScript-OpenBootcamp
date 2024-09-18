// 17. Capitalizar cada palabra

// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

// escribe tu función acá
const capitalizar = (str) => {
  const upperLetter = str.split(' ').map((a) => {
    return a.charAt(0).toUpperCase() + a.slice(1);
  });

  return upperLetter;
};

// código de prueba
console.log(capitalizar('hola mundo')); // "Hola Mundo"
console.log(capitalizar('make it real')); // "Make It Real"
console.log(capitalizar('')); // ""
