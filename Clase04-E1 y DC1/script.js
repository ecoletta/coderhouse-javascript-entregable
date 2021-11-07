
//Utilizo la función ingresarPrecio para pedir el precio del producto
let precioIngresado = ingresarPrecio();
//Utilizo la funcion esEmpleado para preguntar si es empleado de la empresa.
let empleado = esEmpleado()
//Utilizo la función calcularIVA para aplicar el 21% del impuesto
let precioFinal = calcularIVA(precioIngresado);
//Utilizo la funcion descuentoEmpleado para aplicarle el descuento de 30% si es afirmativo.
precioFinal = descuentoEmpleado(precioFinal,empleado);
//Utilizo la funcion mostrarPrecio para mostrarle el precio final al solicitante.
mostrarPrecio(precioFinal);

// FUNCIONES DECLARADAS

function ingresarPrecio (){
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    return precio;
}

function calcularIVA(precio){
    let precioIVA = precio * 1.21;
    return precioIVA.toFixed(2);
}

function mostrarPrecio(precioFinal){
    alert("El precio final del producto es: " + precioFinal)
}

function esEmpleado(){
    let empleado = prompt("Ingrese SI si usted es empleado");
    if(empleado === "SI" || empleado === "si"){
        return true ;
    }
    return false;
}

function descuentoEmpleado(precio,empleado){
    if (empleado == true){
        precio = precio / 1.3;
        return precio.toFixed(2); 
    }
    return precio;
}
