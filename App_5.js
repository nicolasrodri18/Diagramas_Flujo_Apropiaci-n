//Realiza un programa que simule una carrera de 8 corredores que deben completar 4 vueltas cada uno.
//Inicializa un ciclo for para los 8 corredores
for (let i=1; i<=8; i++) {
    //Inicializa un ciclo for para las 4 vueltas de cada corredor
    for (let j=1; j<=4; j++) {
        //Solicita al usuario si el corredor completo la vuelta
        let condicion = prompt(`vuelta ${j}, el corredor completo la vuelta? (Si/No)`);

        //Verifica la respuesta del usuario
        if (condicion.toLowerCase() === "si") {
            console.log(`El corredor ${i} completo la vuelta ${j}`);
        }
        else {
            console.log(`El corredor ${i} no completo la vuelta ${j}`);
            break;
        }
    }
}