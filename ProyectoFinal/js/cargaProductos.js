//Verifico la carga del DOM con JQUERY
$(()=>{
});

///////////////////// VARIABLES /////////////////////

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

//Cargo en una constante el elemento contenedor de mi checkout
const contenedorCheckout = document.querySelector('.contenedor-checkout');

//Cargo en una constante el elemento con el contador del carrito
const contadorCarrito = document.querySelector('#contadorCarrito');

//Cargo en una constante el elemento titulo
const titulo = document.querySelector("#titulo");

//Cargo en una constante el input de busqueda
const busqueda = document.querySelector("#inputdata");

///////////////////// EVENTOS /////////////////////

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
    btnBuscarProducto(busqueda.value);
});

//Con este boton proceso lo que tengo cargado en el carrito y lo muestro en pantalla.
$("#contadorCarrito").click(function(e){
    if(carrito == ""){
    }else{
    contenedorProductos.innerHTML = "";
    titulo.children[0].innerHTML = "Checkout";
    mostrarCheckout(carrito);
    precioTotal(carrito);
    }
});

///////////////////// FUNCIONES /////////////////////

function mostrarProductos(productos){
    //Recorro los elementos de mi catalogo de productos
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
};

function mostrarCheckout(productos){
    //Recorro los elementos del carrito
    productos.forEach((elemento) => {
        //Agrego un elemento div que va a contener a mi producto
        const divProducto = document.createElement('div');
        divProducto.classList.add('card');
        const productoCargado = document.createElement('p');
        productoCargado.innerHTML = `
        <img src="${elemento.imagen}" class="imagenProducto"> Producto: ${elemento.nombre} Precio: ${elemento.precio}$ <button id="eliminar${elemento.id}" class="btn btn-danger">Quitar</button>
        `;
        productoCargado.classList.add('productoCargado');
        //Agrego todos los elementos que fui preparando dentro del div que contiene mi producto
        $(divProducto).append(productoCargado);
        //Agrego el div del producto dentro del div contenedor de productos
        $(contenedorCheckout).append(divProducto);

        let botonEliminar = document.getElementById(`eliminar${elemento.id}`);

        botonEliminar.addEventListener('click',()=>{
            let idProductoQuitar  = parseInt(botonEliminar.id.slice(8,10));
            botonEliminar.parentElement.parentElement.remove();
            quitarProductoCarrito(idProductoQuitar);
            actualizarContadorProducto()
            actualizarIconoCarrito()
            actualizarTotal(carrito);
            //ACA TENDRIA QUE AGREGAR CODIGO PARA ELIMINAR EL ELEMENTO TAMBIEN DEL CARRITO Y ACTUALIZAR EL MONTO DEL CHECKOUT...
        })

    })
    let precioTot = 0;
    const divProducto = document.createElement('div');
    const total = document.createElement('h1');
    const btnFinalizar = `<button id="btnFinalizar" class="btn btn-success">FINALIZAR COMPRA</button>`
    //Le agrego un id a total para poder utilizarlo mas facilmente al momento de cambiar el precio total
    total.setAttribute("id","checkoutTotal");
    //Calculo el precio total de mi carrito y lo muestro
    precioTot = precioTotal(carrito);
    total.textContent = "Total = " + precioTot + "$";
    $(divProducto).append(total);
    $(divProducto).append(btnFinalizar);
    $(contenedorCheckout).append(divProducto);

    $("#btnFinalizar").click(function(){
            $.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(carrito),function(respuesta, estado){
                console.log(respuesta);
                if(estado){
                    vaciarCarrito(carrito);
                    //Actualizo el contador del carrito
                    actualizarContadorProducto();
                    actualizarIconoCarrito();
                    //Limpio el localstorage
                    localStorage.clear();
                    contenedorCheckout.innerHTML = "";
                    titulo.children[0].innerHTML = "La compra finalizo con éxito";
                }
            })        
    })
};

function btnBuscarProducto(busqueda){
    alert("Armar la funcion para buscar el producto " + busqueda );
};

function agregarACarrito(id){
    //Mediante el id que traigo del evento click sobre el boton, busco el elemento en mi catalogo de productos y lo agrego al carrito
    const productoSeleccionado = productos.find( elemento => elemento.id === id );
    carrito.push(productoSeleccionado);
    //Guardo el ultimo producto agregado al carrito en LocalStorage. Por ahi para crear mas adelante una funcion deshacer rapido.
    cargarLocalStorage(productoSeleccionado);
};

function quitarProductoCarrito(id){
    //Mediante el id que traigo del evento click sobre el boton, busco el elemento en mi carrito de productos y lo quito 
    let carritoTemp = [];
    carrito.forEach(elemento =>{
        if(elemento.id === id){

        }else{
            carritoTemp.push(elemento);
        }
    })
    vaciarCarrito(carrito);
    carritoTemp.forEach(elemento=>{
        carrito.push(elemento);
    })
};

function cargarLocalStorage(elemento){
    localStorage.setItem("ultimoProducto",JSON.stringify(elemento));
};

function actualizarContadorProducto(){
    
    //Actualizo en localstorage el contador del carrito. Que me sirve para actualizar el numero de elementos del carrito en el navbar
    localStorage.setItem("contadorCarrito",carrito.length);
};

function actualizarIconoCarrito(){
    //Actualizo el atributo data-count que me permite cambiar el numero del carrito
    contadorCarrito.setAttribute("data-count",Number(localStorage.getItem("contadorCarrito")));
};

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
};

function precioTotal(carrito){
    let contador = 0;
    carrito.forEach((elemento) => {
        // contador = contador + parseInt(elemento.precio);
        let precio = elemento.precio;
        contador = contador + precio;
    })
    return contador;
};

function actualizarTotal(carrito){
    let precioTot = precioTotal(carrito);
    //Cargo en una constante el elemento con el precio total del carrito
    const total = document.querySelector('#checkoutTotal');
    //Actualizo el precio total del carrito
    total.textContent = "Total = " + precioTot + "$";
};

function vaciarCarrito(carrito){
    for(let i=carrito.length; i>0 ; i--){
        carrito.pop();
    }
}