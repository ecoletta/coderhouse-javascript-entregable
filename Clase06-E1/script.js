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

const arrayProductos = [];
//Se define el objeto producto
let producto1 = new producto("","", "", false);
let flag = "";
do{
    //Carga de producto que quiere el cliente
    producto1.ingresarProducto();
    producto1.ingresarCategoria();
    producto1.ingresarPrecio();
    flag = prompt("Ingrese SI en caso de desear ingresar otro producto")
    arrayProductos.push(producto1);
}while(flag == "SI");
console.log(arrayProductos);
alert("La cantidad de elementos ingresados es: " + arrayProductos.length);



