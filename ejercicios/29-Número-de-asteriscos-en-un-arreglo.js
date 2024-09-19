// 29. Número de asteriscos en un arreglo

// Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:

// escribe tu función acá
const numAsteriscos = (arr) => {
    let totalAst = 0;
    for (let i = 0; i < arr.length ; i++) {
        if(arr[i] === "*"){
            totalAst++
        }
    }

    return totalAst;
}

// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0