// 20. Generar contraseña

// Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.

// Reemplaza el caracter “a” por “4”.
// Reemplaza el caracter “e” por “3”.
// Reemplaza el caracter “i” por “1”.
// Reemplaza el carater “o” por “0”.
// escribe tu función acá
const password = (str) => {
  const changePass = str.split('').map((a) => {
    switch (a) {
      case 'a':
        return '4';
      case '2':
        return '3';
      case 'i':
        return '1';
      case 'o':
        return '0';
      case ' ':
        return '';
      default:
        return a;
    }
  });
  return changePass.join('');
};

// código de prueba
console.log(password('hola')); // "h0l4"
console.log(password('esta es una prueba')); // "3st43sun4pru3b4"
console.log(password('')); // ""
