//Me traigo del localstorage el producto cargado y el dato de si es empleado.
let productoLS = JSON.parse(localStorage.getItem("producto"));
let empleadoLS = localStorage.getItem("empleado");

//Seleccion el nodo sobre el que voy a trabajar
let separador = document.getElementById("separador")

//Creo el elemento li para agregar un nuevo elemento
let li = document.createElement("li");
//Cargo en el li la informacion que quiero mostrar
// li.innerHTML = "El producto " + productoLS.nombre + " de la categoria " + productoLS.categoria + " tiene un precio de " + productoLS.precio;
li.innerHTML = `El producto <b>${productoLS.nombre} </b> de la categoria <b>${productoLS.categoria}</b> tiene un precio de <b>${productoLS.precio}</b>`;
//Agrego un nuevo elemento en el nodo
separador.appendChild(li);

//Pregunto si es o no empleado y cargo el texto a mostrar
if(empleadoLS === "true"){
    let li = document.createElement("li");
    li.innerHTML = "El producto tiene <b>descuento especial</b> por ser empleado"
    //Agrego un nuevo elemento li con el contenido de empleado
    separador.appendChild(li);
}else{
    let li = document.createElement("li");
    li.innerHTML = "El producto <b>NO</b> cuenta con el descuento de empleado"
    //Agrego un nuevo elemento li con el contenido de empleado
    separador.appendChild(li);
}




