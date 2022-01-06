function agregarACarrito(productoNuevo) {
    let encontrado = carrito.find(p => p.id == productoNuevo.id);
    console.log(encontrado);
    if (encontrado == undefined) {
        let prodACarrito = new ProductoCarrito(productoNuevo);
        carrito.push(prodACarrito);
        console.log(carrito);
     
        //agregamos una nueva fila a la tabla de carrito
        $("#tablabody").append(`
            <tr id='fila${prodACarrito.id}'>
            <td> ${prodACarrito.id} </td>
            <td> ${prodACarrito.nombre}</td>
            <td id='${prodACarrito.id}'> ${prodACarrito.cantidad}</td>
            <td> ${prodACarrito.precio}</td>
            <td> <button class='btn btn-light'>🗑️</button>`);
    } else {
        //pido al carro la posicion del producto 
        let posicion = carrito.findIndex(p => p.id == productoNuevo.id);
        console.log(posicion);
        carrito[posicion].cantidad += 1;
        $(`#${productoNuevo.id}`).html(carrito[posicion].cantidad);
    }
    $("#gastoTotal").html(`Total: $ ${calcularTotal()}`);

}
function renderizarProductos() {
    //renderizamos los productos 
    for (const prod of productos) {
        $(".milista").append(`<li class="list-group-item">
        <h3>ID: ${prod.id}</h3>
        <img src="${prod.foto}" width="250px" height="250px">
        <p>Producto: ${prod.nombre}</p>
        <p>Precio $ ${prod.precio}</p>
        <button class="btn btn-danger" id='btn${prod.id}'>COMPRAR</button>
    </li>`);

        //Evento para cada boton
        $(`#btn${prod.id}`).on('click', function() {
            agregarACarrito(prod);
        });
    }
}
