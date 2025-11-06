//Inicializa las variables para la suma y el contador
let sum = 0;
let i;

//Inicia un ciclo for del 1 al 100
for (i = 1; i <= 100; i++) {

    //Verifica si el número es par o menor o igual a 90
    if (i % 2 === 0 || i <= 90) {
        sum += i;
    }
    else {
        break;
    }
}

//Imprime el resultado de la suma y el número hasta donde se sumó
console.log(`La suma de los numeros llega hasta el numero ${i} y es igual a ${sum}`);