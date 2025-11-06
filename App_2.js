//Inicializa un ciclo for que itere 5 veces
for (let i = 1; i <= 5; i++) {

    //Solicita al usuario si el niño cuenta con carnet
    let carnet = prompt("¿El niño cuenta con carnet? (Si/No)");

    //Verifica la respuesta del usuario
    if (carnet.toLowerCase() === "si") {
        console.log("El niño cuenta con carnet, puede ingresar");
    } 
    else {
        console.log("El niño no cuenta con carnet, no puede ingresar");
    }
}