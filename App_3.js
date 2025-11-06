//Iniciacilizamos un arreglo para almacenar los números ingresados por el usuario
let nums = [];
let num;

//Solicita al usuario ingresar 10 números enteros y los almacena en el arreglo
for (let i = 1; i <= 10; i++) {
    num = prompt(`Ingrese numero entero ${i}:`);
    nums[i] = num;
    console.log("Numero Agregado");
}

//Verifica cuáles de los números ingresados son mayores a 50
for (let i = 1; i <= nums.length; i++){
    num = nums[i];
    if (num > 50){
        console.log("El numero es mayor a 50");
    }
}