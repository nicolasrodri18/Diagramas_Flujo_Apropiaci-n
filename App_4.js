//Inicializa una variable saldo solicitando al usuario su valor
let saldo = prompt("Ingrese el saldo:");

//Inicia un ciclo while que se ejecuta mientras el saldo sea mayor a 0
while (saldo > 0) {
    let retiro = prompt("Ingrese cuanto deseas retirar:");

    //Verifica si el monto a retirar es menor o igual al saldo disponible
    if (retiro <= saldo) {
        console.log("Retiro exitoso");
        saldo -= retiro;
        console.log(`${saldo} es el saldo restante`);
    }
    else{
        console.log("Intentaste retirar un saldo no valido")
    }
}