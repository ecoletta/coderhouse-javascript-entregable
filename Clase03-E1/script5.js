let palabraIngresada = prompt("Ingrese una palabra. Escriba ESC para salir");
let palabrasConcatenadas ="";
while(palabraIngresada != "ESC"){
    palabrasConcatenadas = palabrasConcatenadas + "; " + palabraIngresada; 
    palabraIngresada = prompt("Ingrese una palabra. Escriba ESC para salir");
}
console.log(palabrasConcatenadas);
alert("El programa ha finalizado");