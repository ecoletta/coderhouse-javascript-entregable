

Descripción de la aplicación

Para inicializar la aplicación utilizar el Live Server desde el index.html

La aplicación simula ser un sitio de compras de productos deportivos, el cual en este caso cuenta con una base de datos de 13 productos. Al inicializar el sitio se cargan los 13 productos mediante un GET hacia el archivo productos.json que tiene los productos.

Se pueden ir agregando productos al carrito mediante los botones que hay en cada producto. Al hacerlo aparece una notificación en verde debajo del boton presionado que desaparece en pocos segundos y se actualiza el contador del producto del icono del carrito arriba a la derecha.

La funcion de la barra de busqueda no esta codificada, pero captura la palabra que se desea buscar y podria codear la función para filtrar. Aun no lo realice por falta de tiempo.

Al hacer click en el carrito, se elimina el catalogo de productos de la pantalla y aparecen los productos que fueron cargados al carrito. Cada producto puede ser eliminado con el boton que lo acompaña. Tambien se muestra el valor total de la compra. El valor total y la cantidad de productos en el icono se actualizan con cada producto eliminado.

Al presionar el boton finalizar se envia un post con el carrito que el cliente compró y se inicializa el carrito, localstorage, icono y la pantalla. Aparece un mensaje de compra finalizada con éxito.