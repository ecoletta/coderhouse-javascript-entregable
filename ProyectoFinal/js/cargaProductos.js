//Verifico la carga del DOM con JQUERY
$(()=>{
    console.log("El DOM esta listo.");
});

//Defino la URL del archivo de mi catalogo de productos
const URL = "http://127.0.0.1:5500/ProyectoFinal/database/productos.json"

//Defino la clase producto
class producto{
    constructor(id, nombre, categoria, precio, imagen, vendido ){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.vendido = vendido || false ;
    }
};

//En esta constante tengo todo mi catalogo de productos
let productos = [];

const carrito = [];

//Cargo en una constante el elemento contenedor de mis productos
const contenedorProductos = document.querySelector('.contenedor-productos');

//Cargo en una constante el elemento con el contador del carrito
const contadorCarrito = document.querySelector('#contadorCarrito');

//Al ocurrir el evento carga de DOM con JQUERY ejecuto la funcion que carga mis productos en la pagina
$(document).ready(function(){
    
    // Obtengo los productos de la base de datos con AJAX
    $.getJSON('./database/productos.json',function(data){
        data.forEach(elemento => productos.push(elemento));

        mostrarProductos(productos);
        console.log("Se cargaron los productos con exito.");
    })
});

//Obtengo el valor del boton busqueda para procesar con JQUERY
$("#btnBuscar").click(function(e){
    e.preventDefault();
    btnBuscarProducto();
});

//Funcion de carga de productos en pagina
function mostrarProductos(productos){
    //Recorro los elementos de mi catalogo de productos
    //SI EN EL SIGUIENTE CODIGO CAMBIO PRODUCTOS x PRODUCTOS2 (QUE ES LA QUE ESTOY UTILIZANDO CON AJAX, NO ME CARGA LOS PRODUCTOS PORQUE PARECIERA QUE ESTA FUNCION CORRE ANTES QUE LA DE AJAX)
    productos.forEach((elemento) => {
        //Agrego un elemento div que va a contener a mi producto
        const divProducto = document.createElement('div');
        divProducto.classList.add('card');
        //Preparo la imagen que va a tener
        const imagen = document.createElement('img');
        imagen.src = elemento.imagen;
        imagen.classList.add('imagenProducto')
        //Preparo el nombre del producto
        const nombreProducto = document.createElement('h2');
        nombreProducto.textContent = elemento.nombre;
        nombreProducto.classList.add('nombreProducto');
        //Preparo el precio del producto
        const precioProducto = document.createElement('h3');
        precioProducto.textContent = elemento.precio + "$"
        precioProducto.classList.add('precioProducto');
        //Defino un boton para agregar el producto al carrito
        const btnAgregar = document.createElement('button');
        btnAgregar.textContent = "AGREGAR AL CARRITO"
        btnAgregar.classList.add('btnAgregar');
        //Agrego un mensaje de producto agregado.
        const msgProdAgregado = document.createElement('h2');
        msgProdAgregado.textContent = "Se agrego " + elemento.nombre + " al carrito";
        msgProdAgregado.classList.add('msgProdAgregado');
        //Agrego el evento click sobre el boton que dispara la funcion que carga el producto en el carrito
        $(btnAgregar).click(function() {
            agregarACarrito(elemento.id);
            actualizarContadorProducto();
            actualizarIconoCarrito();
            $(msgProdAgregado).css("background-color","green")
                .fadeIn(1000)
                .fadeOut(2000);
        });

        //Agrego todos los elementos que fui preparando dentro del div que contiene mi producto
        $(divProducto).append(imagen);
        $(divProducto).append(nombreProducto);
        $(divProducto).append(precioProducto);
        $(divProducto).append(btnAgregar);
        $(divProducto).append(msgProdAgregado);

        //Agrego el div del producto dentro del div contenedor de productos
        $(contenedorProductos).append(divProducto);
    })
}

function btnBuscarProducto(){
    alert("Armar la funcion para buscar productos");
}

function agregarACarrito(id){
    //Mediante el id que traigo del evento click sobre el boton, busco el elemento en mi catalogo de productos y lo agrego al carrito
    const productoSeleccionado = productos.find( elemento => elemento.id === id );
    carrito.push(productoSeleccionado);
    //Guardo el ultimo producto agregado al carrito en LocalStorage. Por ahi para crear mas adelante una funcion deshacer rapido.
    cargarLocalStorage(productoSeleccionado);
}

function cargarLocalStorage(elemento){
    localStorage.setItem("ultimoProducto",JSON.stringify(elemento));
}

function actualizarContadorProducto(){
    
    //Actualizo en localstorage el contador del carrito. Que me sirve para actualizar el numero de elementos del carrito en el navbar
    localStorage.setItem("contadorCarrito",carrito.length);
}

function actualizarIconoCarrito(){
    //Actualizo el atributo data-count que me permite cambiar el numero del carrito
    contadorCarrito.setAttribute("data-count",Number(localStorage.getItem("contadorCarrito")));
}

function obtenerProductosDeArchivo(URL){

    //Al final esta funcion funciona correctamente pero no la utilice.
    $.ajax({
        url: URL
    }).done(function(data,status){
        if(status == "success"){
            console.log("Se obtuvieron con exito los productos de la base de datos");
            productos2 = data;
            console.log(productos2);
            return productos2;
        }else{
            console.log("Error al intentar obtener los productos de la base de datos");
        }
    });

    // $.get(URL, (data,status) =>{
    //     if(status == "success"){
    //         productos2 = data;
    //         console.log("Se obtuvieron con exito los productos de la base de datos")
    //     }else{
    //         console.log("Error al intentar obtener los productos de la base de datos");
    //     }
    //     ;
    // })
};
