// 15. Transcribir ADN a ARN

// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// G -> C
// C -> G
// T -> A
// A -> U
// escribe tu función acá
const transcribir = (str) => {
  const letterChanger = str.split('').map((a) => {
    switch (a) {
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
      default:
        return '';
    }
  });

  return letterChanger.join('');
};

// código de prueba
console.log(transcribir('ACGT')); // "UGCA"
console.log(transcribir('ACGTGGTCTTAA')); // "UGCACCAGAAUU"
