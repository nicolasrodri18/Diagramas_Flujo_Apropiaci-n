//Inicializa un ciclo for que solicite la edad y el nombre de 5 personas.
for (let i = 1; i <= 5; i++) {
    let edad = prompt(`edad de la persona ${i}:`);
    let nombre = prompt(`nombre de la persona ${i}:`);

    //Verifica si la edad es mayor o igual a 18
    if (edad >= 18) {
        console.log(`la persona tiene 18 o mas años \nDatos: ${nombre}, ${edad} de la persona`);
    }
}