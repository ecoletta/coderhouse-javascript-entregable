class producto{
    constructor(producto, categoria, precio, vendido ){
        this.producto = producto;
        this.categoria = categoria;
        this.precio = precio;
        this.vendido = vendido;
    }
    calcularIVA(precio){
        let precioIVA = precio * 1.21;
        return precioIVA.toFixed(2);
    }
    mostrarDetalleProducto(){
        alert("El producto " + this.producto + " del tipo " + this.categoria + " tiene un precio de " + this.precio + " + IVA incluido");
    }

    ingresarPrecio(){
        this.precio = parseInt(prompt("Ingrese el precio del producto"));
        return;
    }

    ingresarProducto(){
        this.producto = prompt("Ingrese el nombre del producto");
        return;
    }

    ingresarCategoria(){
        this.categoria = prompt("Ingrese la categoria del producto");
        return;
    }

}

//Se define el objeto producto
let producto1 = new producto("","", "", false);
//Carga de producto que quiere el cliente
producto1.ingresarProducto();
producto1.ingresarCategoria();
producto1.ingresarPrecio();
//Calculo de IVA del producto
producto1.precio = producto1.calcularIVA(producto1.precio);
//Mostrar detalle final del producto y precio con IVA incluido
producto1.mostrarDetalleProducto();


