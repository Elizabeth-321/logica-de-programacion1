/*1 paso:Hacer 3 variables, */  
const prompt = require("prompt-sync")();  /*LLamar a require,que es la forma de importar modulos en node.js,despues llama a la funcion que deja usar prompt() */
    
let numero1 = parseFloat(prompt("ingresa un numero"));/*prompt muestra el mensaje en la terminal y espera a que el usuario ingrese el numero */
let numero2 = parseFloat(prompt("ingresa un segundo numero"));
let numero3 = parseFloat(prompt("ingresa un tercer numero"));/*parseFloat convierte la entrada en un numero a decimal */
console.log("los numeros ingresados son:", numero1, numero2, numero3);

/*let mayor, menor, centro;

/*Verificar si los numeros son iguales */
if(numero1 === numero2 && numero2 === numero3){
    console.log("los tres numeros son iguales");
/*>= (compara si el numero es mayor o igual que otro) */
}else{
let mayor, menor, centro;
 if(numero1 >= numero2 && numero1 >= numero3){
    mayor = numero1;/*en este caso el numero1 es el mayor*/
 if(numero2 >= numero3){
     centro = numero2;
     menor = numero3;
 }else{
     centro = numero3;
     menor = numero2;
  }
 }else if (numero2 >= numero1 && numero2 >= numero3){
            mayor = numero2;
    
if (numero1 >= numero3){
    centro = numero1;
    menor = numero3;

}else{
    centro = numero3
    menor = numero1
    }
}else {
    mayor = numero3
if (numero1 >= numero2){
    centro = numero1;
    menor = numero2;

}else{
    centro = numero2;
    menor = numero1;

}
}

console.log("numero mayor",mayor)
console.log("numero del centro", centro)
console.log("numero menor",menor)

console.log("numeros ordenados de mayor a menor", mayor,centro,menor);
console.log("numeros ordenados de menor a mayor", menor,centro,mayor);
}   


    



