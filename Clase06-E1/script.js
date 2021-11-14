class producto{
    constructor(nombre, categoria, precio, vendido ){
        this.nombre = nombre | "";
        this.categoria = categoria | "";
        this.precio = precio | 0;
        this.vendido = vendido | false;
    }
    calcularIVA(precio){
        let precioIVA = precio * 1.21;
        return precioIVA.toFixed(2);
    }
    mostrarDetalleProducto(){
        alert("El producto " + this.nombre + " del tipo " + this.categoria + " tiene un precio de " + this.precio + " + IVA incluido");
    }

    ingresarPrecio(){
        let precio = parseInt(prompt("Ingrese el precio del producto"));
        return precio;
    }

    ingresarProducto(){
        let nombre = prompt("Ingrese el nombre del producto");
        return nombre;
    }

    ingresarCategoria(){
        let categoria = prompt("Ingrese la categoria del producto");
        return categoria;
    }

}

let arrayProductos = [];
//Se define el objeto producto
let producto1 = new producto("","", "", false);
let flag = "";
do{
    //Carga de producto que quiere el cliente
    producto1.nombre = producto1.ingresarProducto();
    console.log(producto1.nombre);
    producto1.categoria = producto1.ingresarCategoria();
    console.log(producto1.categoria);
    producto1.precio = producto1.ingresarPrecio();
    console.log(producto1.precio);
    console.log(producto1);
    arrayProductos.push(producto1);
    console.log(arrayProductos);
    delete producto1;
    flag = prompt("Ingrese SI en caso de desear ingresar otro producto");
}while(flag == "SI");
alert("La cantidad de elementos ingresados es: " + arrayProductos.length);



