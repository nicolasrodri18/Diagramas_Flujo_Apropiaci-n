//Iniciamos solicitando al usuario el numero de la tabla a practicar
let num = console.prompt("Ingrese el numero de la tabla a practicar:");

//creamos un boolean para controlar cuando terminar los ciclos
let terminar = false;

//Iniciamos un ciclo para las 5 rondas de la tabla
for (let i = 1; i <= 5; i++) {

    //Iniciamos un ciclo para cada multiplicación de la tabla
    for (let j = 0; j <= 10; j++) {

        //Solicitamos al usuario el resultado de la multiplicación
        let result = console.prompt(`cual es el resultado: ${num} x ${j}`);

        //Verificamos si el resultado es correcto
        if (result == num * j) {
            console.log("Correcto");
        }

        //Si el resultado es incorrecto
        else {
            console.log(`Incorrecto, el resultado correcto es ${num * j}`);
            terminar = true;
            break;
        }
    }
    
    //Si el usuario se equivoco, terminamos el ciclo principal
    if (terminar) {
        break;
    }
}