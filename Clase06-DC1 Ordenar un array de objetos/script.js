class producto{
    constructor(nombre, categoria, precio, vendido ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.vendido = vendido;
    }
    calcularIVA(precio){
        let precioIVA = precio * 1.21;
        return precioIVA.toFixed(2);
    }
    mostrarDetalleProducto(){
        alert("El producto " + this.nombre + " del tipo " + this.categoria + " tiene un precio de " + this.precio + " + IVA incluido");
    }

    ingresarPrecio(){
        this.precio = parseInt(prompt("Ingrese el precio del producto"));
        return;
    }

    ingresarProducto(){
        this.nombre = prompt("Ingrese el nombre del producto");
        return;
    }

    ingresarCategoria(){
        this.categoria = prompt("Ingrese la categoria del producto");
        return;
    }

}
let arrayProductos = [];
//Se define el objeto producto
let producto1 = new producto("Camiseta", "Deporte", 5000, false);
let producto2 = new producto("Pelota", "Deporte", 3500, false);
let producto3 = new producto("Zapatillas", "Deporte", 9999, false);
let producto4 = new producto("Pantalon", "Deporte", 4000, false);

arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);
arrayProductos.push(producto4);

let metodo = prompt("Ingrese si desea ordenar por PRECIO o NOMBRE del producto");

if(metodo == "PRECIO" || metodo =="precio"){
    arrayProductos.sort((a, b) => {
        if(a.precio < b.precio ){
            return -1;
        }
        if(a.precio >b.precio){
            return 1;
        }   
        return 0;
    });
    }else if(metodo == "NOMBRE" || metodo == "nombre"){
        arrayProductos.sort((a, b) => {
            if(a.nombre < b.nombre ){
                return -1;
            }
            if(a.nombre >b.nombre){
                return 1;
            }
        
            return 0;
        });
    }else{
        alert("No se ha ingresado una opcion valida");
    }

console.log(arrayProductos);


