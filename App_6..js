//Solicitar al usuario la cantidad de boletos disponibles y la edad mínima permitida para una película.
let boletos = prompt("Ingrese la cantidad de boletos disponibles:");
let edadmin = prompt("Ingrese la edad minima permitida para la pelicula:");

//Inicia un ciclo while que se ejecuta mientras haya boletos disponibles
while (boletos > 0) {

    //Solicita al usuario la edad del comprador
    let edad = prompt("Ingrese la edad del comprador:");

    //Verifica si el comprador cumple con la edad mínima
    if (edad >= edadmin) {

        //Solicita al usuario la cantidad de boletos que desea comprar
        let boleto = prompt("¿Cuántos boletos desea comprar?");

        //Verifica si hay suficientes boletos disponibles
        if (boleto <= boletos) {
            console.log("Boletos comprados con exito.");

            //Resta la cantidad de boletos comprados a los boletos disponibles
            boletos -= boleto;
        }
        else {
            console.log("Cantidad de boletos no disponible.");
        }

        //Muestra la cantidad de boletos restantes
        console.log(`Boletos restantes: ${boletos}`);
    }

    //Si el comprador no cumple con la edad mínima
    else {

        console.log("El comprador no cuenta con la edad minima para la pelicula");
    }
}