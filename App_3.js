//Iniciamos un ciclo que va del 1 al 10
for (let i = 1; i <= 10; i++) {
    
    //Solicitamos al usuario la cantidad de dulces que tiene
    let dulces = console.prompt("Ingrese la cantidad de dulces que tiene:");

    //Verificamos si tiene dulces
    if (dulces == 0 || dulces < 1) {
        console.log("No tienes dulces, se le dara uno");
    }
    else {
        console.log(`Si tiene dulces, no se le dara ninguno`);
        continue;
    }
}