class producto{
    constructor(nombre, categoria, precio, vendido ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.vendido = vendido || false ;
    }
    calcularIVA(precio){
        let precioIVA = precio * 1.21;
        return precioIVA.toFixed(2);
    }
    mostrarDetalleProducto(){
        alert("El producto " + this.nombre + " del tipo " + this.categoria + " tiene un precio de " + this.precio + " + IVA incluido");
    }
}

//Se define el objeto producto
let producto1 = new producto();
//Utilizo la funcion esEmpleado para preguntar si es empleado de la empresa.
let empleado = esEmpleado()
//Carga de producto que quiere el cliente
producto1.nombre = ingresarNombre();
producto1.categoria = ingresarCategoria();
producto1.precio = ingresarPrecio();
//Utilizo la funcion descuentoEmpleado para aplicarle el descuento de 30% si es afirmativo.
producto1.precio = descuentoEmpleado(producto1.precio,empleado);
//Calculo de IVA del producto
producto1.precio = producto1.calcularIVA(producto1.precio);
//Mostrar detalle final del producto y precio con IVA incluido
producto1.mostrarDetalleProducto();


//Declaracion de funciones
function ingresarPrecio(){
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    return precio;
}

function ingresarNombre(){
   let nombre = prompt("Ingrese el nombre del producto");
    return nombre;
}

 function ingresarCategoria(){
    let categoria = prompt("Ingrese la categoria del producto");
    return categoria;
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