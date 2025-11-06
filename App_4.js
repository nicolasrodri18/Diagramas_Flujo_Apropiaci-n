let saldo = prompt("Ingrese el saldo:");
while (saldo > 0) {
    let retiro = prompt("Ingrese cuanto deseas retirar:");
    if (retiro <= saldo) {
        console.log("Retiro exitoso");
        saldo -= retiro;
        console.log(`${saldo} es el saldo restante`);
    }
    else{
        console.log("Intentaste retirar un saldo no valido")
    }
}