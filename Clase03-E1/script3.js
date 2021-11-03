let numero = 20;
let resultado = 0;
for (i=0; i <= numero; i++){
    if(i%2 === 0){
        resultado = resultado + i;
        console.log("Resultado parcial: " + resultado);
    }
}
console.log("El resultado final es : " + resultado);