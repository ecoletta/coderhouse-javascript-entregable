
//Utilizo la función para preguntar el tipo de producto.
let tipoProducto= ingresarTipoProducto();
//Utilizo la funcion esPerecedero para saber si es perecedero.
let perecedero = esPeredecero()
//Utilizo la funcion descuentoEmpleado para aplicarle el descuento de 30% si es afirmativo.
let vencimiento = calcularVencimiento(perecedero);
//Utilizo la funcion mostrarVencimiento para indicar cuando vence el producto.
mostrarVencimiento(tipoProducto,vencimiento);

// FUNCIONES DECLARADAS

function ingresarTipoProducto(){
    let tipo = prompt("Ingrese el nombre del producto");
    return tipo;
}

function mostrarVencimiento(tipoProducto,vencimiento){
    alert("El vencimiento del producto " + tipoProducto + " es " + vencimiento)
}

function esPeredecero(){
    let tipo = prompt("Ingrese SI si su alimento es perecedero");
    if(tipo === "SI" || tipo === "si"){
        return true ;
    }
    return false;
}

function calcularVencimiento(perecedero){
    let vencimiento;
    if (perecedero == true){
        vencimiento = "30 dias";
        return vencimiento; 
    }else{
        vencimiento = "180 dias";
        return vencimiento;
    }
}
