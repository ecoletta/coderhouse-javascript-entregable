let palabraIngresada="";
let palabrasConcatenadas="";
do{
    if(palabraIngresada === ""){
    }else{
        palabrasConcatenadas = palabrasConcatenadas + "; " + palabraIngresada; }
    palabraIngresada = prompt("Ingrese una palabra. Escriba ESC para salir");
}while(palabraIngresada != "ESC")
console.log(palabrasConcatenadas);
alert("El programa ha finalizado");