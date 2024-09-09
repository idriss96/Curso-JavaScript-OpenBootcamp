// listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista_2 = new Array(2,"hola", true, undefined, null);
const lista_3 = new Array(3);
lista_3[0] = "soy el primer elemento, index 0";
const lista_4 = [lista, lista_2, lista_3]

console.log(lista);
console.log(lista_2);
console.log(lista_3);
console.log(lista_4);

// Objetos 
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["marcos", "alba", "alberto"],
    tarjeta: {
        marca: "Vodafon",
        almacenamiento: 32,
    },
    "altura-tarjeta": 4,
}

movil.año = 2019;
movil.marca = "Samsung"

console.log(movil.marca);

// Fechas
// Librerías de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 24 2022");
console.log(fecha_cadena);

const fecha_valores = new Date(2023, 0, 8);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const año = ahora.getFullYear();

console.log(dia, mes, año);




