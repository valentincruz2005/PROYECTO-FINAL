//ESTABLEZCO EL ARRAY CARRITO
let carro = []



//CREO EL BOTON FINALIZAR COMPRA
let botonFinalizarCompra = document.createElement("button")
botonFinalizarCompra.innerText = "FINALIZAR COMPRA"
document.body.appendChild(botonFinalizarCompra)

botonFinalizarCompra.onclick = () => {
    const finalprice= TotalCompra.innerText
    alert ("SU COMPRA ESTA FINALIZANDO, DEBE ABONAR $ " + finalprice)
    
}
//CREO UN OBJETO CONSTRUCTOR SIMULANDO SER UNA CUENTA, OBTENIENDO DATOS MEDIANTE INPUTS
class comprador {
    constructor (nombre, telefono, fechaDeNacimiento, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.fechaDeNacimiento = fechaDeNacimiento
        this.direccion = direccion}
    }

    const save = (a, b) => { sessionStorage.setItem(a, b) }

//ESTABLEZCO ARRAY DE OBJETOS
const productes = [{

    id:1,
    verdura: 'PAPA',
    precio: 10,
    proveedor: 'colombiano', 
    foto: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1"
},
    
    {id:2,
    verdura: 'TOMATE',
    precio: 20,
    proveedor: 'venezolano',
foto:"https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Corona-1.jpg"},
 {
    id:3,
    verdura: 'LECHUGA',
    precio: 30,
    proveedor: 'boliviano',
foto:"https://media.istockphoto.com/photos/lettuce-isolated-isolated-on-white-background-picture-id181072765?k=20&m=181072765&s=612x612&w=0&h=8gpOrTTz71R9QgfP64ALOCNFW8Pat5arsVzDQamOu5k="},
  {
    id:4,
    verdura: 'ZANAHORIA',
    precio: 30,
    proveedor: 'brasilero',
foto:"https://soycomocomo.es/media/2019/03/zanahorias.jpg"},
 {
    id:5,
    verdura: 'PEPINO',
    precio: 50,
    proveedor: 'colombiano',
foto:"https://st2.depositphotos.com/1494134/7007/v/600/depositphotos_70075971-stock-illustration-cucumber-and-slice-isolated-on.jpg"},
{
    id:6,
    verdura: 'CALABAZA',
    precio: 20,
    proveedor: 'colombiano',
foto:"https://static.libertyprim.com/files/familles/potiron-large.jpg?1569317112"},
 {
    id:7,
    verdura: 'HUEVO',
    precio: 120,
    proveedor: 'colombiano',
foto:"https://mejorconsalud.as.com/wp-content/uploads/2018/09/huevos-gallina-768x512.jpg"}]
//CREO LOS OBJETOS EN EL HTML MEDIANTE DOM
function mostrarProductos(listado) {

    $("#productosgenerados").empty();

    for (const objeto of listado) {
        $("#productosgenerados").append(

`<div class="card" >
    <h5 class="card-title">${objeto.verdura}</h5>
    <p class="card-text">${objeto.proveedor}</p>
    <p class="card-text"><b> $ ${objeto.precio}</b></p>
    <img class="card-img-top" src="${objeto.foto}" alt="Card image cap" width="250px" height="250px">
    <button id= "${objeto.id}"> AGREGAR A LA COMPRA</button><div class="card-footer text-muted"> </div>`
        );
        document.getElementById (objeto.id).onclick = () => {
                  agregarAlCarrito (objeto)
        }
    }
    
} 

mostrarProductos(productes);





/* for (const prod of productes){
        let div= document.createElement ("div")
        div.innerHTML =
        ` <ul class=" list-group list-group-horizontal">
        <li class="list-group-item"  >
        <h3> <b> ID : </b> ${prod.id}</h3> 
        <h2><mark> VERDURA: ${prod.verdura}</mark></h2>
        <img src="${prod.foto}" width="250px" height="250px">
        <h3> PRECIO= $ ${prod.precio} </h3>
        <button id= "${prod.id}"> AGREGAR A LA COMPRA</button>
        </li> </ul> `
        save(prod.id,JSON.stringify (prod.verdura))
        document.body.appendChild (div)
        document.getElementById (prod.id).onclick = () => {
            agregarAlCarrito (prod)
        }
        }*/
        //let div= document.createElement ("div")
       // div.innerHTML =
       class ProductoCarrito {
        constructor(objProd) {
            this.id = objProd.id;
            this.foto = objProd.foto;
            this.verdura = objProd.verdura;
            this.precio = objProd.precio;
            this.proveedor = objProd.proveedor
            this.cantidad = 1;
        }
    }
       //CREO UNA TABLA PARA QUE EL USUARIO VEA LOS PRODUCTOS INGRESADOS
const agregarAlCarrito = (aidi) => {
    /*let encontrado = carro.find(p => p.id == aidi.id)
   // console.log (encontrado)
    if (encontrado == undefined) {
        
            //let prodACarrito = new ProductoCarrito(aidi);
            carro.push(new ProductoCarrito(aidi));
            console.log()
            }
$("#tablabody").append(`
            <tr id='fila${aidi.id}'>
            <td> ${aidi.id} </td>
            <td> ${aidi.verdura}</td>
            <td> ${aidi.proveedor}
            <td> ${aidi.precio}</td>
            <td> <button id="eliminar${aidi.id}" class='btn btn-danger'>ELIMINAR</button>`)
        $(`#eliminar${aidi.id}`).click(function (){
   let prodEliminar= carro.findIndex (prod => prod.id == aidi.id)
   carro.splice (prodEliminar,1)
    $(`fila${aidi.id}`).remove()
})
totalCarrito()
console.log (carro)
*/
$("#count").empty()
let encontrado = carro.find(p => p.id == aidi.id);
    console.log(encontrado);
    if (encontrado == undefined) {
        let prodACarrito = new ProductoCarrito(aidi);
        carro.push(prodACarrito);
        console.log(carro);
     
        //agregamos una nueva fila a la tabla de carrito
        $("#tablabody").append(`
            <tr id='fila${prodACarrito.id}'>
            <td> ${prodACarrito.id} </td>
            <td> ${prodACarrito.verdura}</td>
            <td id='cant${prodACarrito.id}'> ${prodACarrito.cantidad}</td>
            <td> ${prodACarrito.proveedor}</td>
            <td> ${prodACarrito.precio}</td>
            <td id='eliminar${prodACarrito.id}'> <button class='btn btn-danger'>ELIMINAR</button>
            `)
$(`#eliminar${prodACarrito.id}`).click (function(){
    let eliminarprod= carro.findIndex (prod =>prod.id == prodACarrito.id)


    if (carro[eliminarprod].cantidad > 1) {
        carro[eliminarprod].cantidad += -1
        $(`#cant${prodACarrito.id}`).html(carro[eliminarprod].cantidad)
        totalCarrito
    }
  else{carro.splice(eliminarprod,1)
$(`#fila${prodACarrito.id}`).remove()}
  totalCarrito


    //carro.splice (eliminarprod)



 
  // $(`#fila${prodACarrito.id}`).remove()
  // totalCarrito ()
  // $(`#${prodACarrito.id}`).removeAttr ()
   //cantidades2

})
        
    } else {
        //pido al carro la posicion del producto 
        let posicion = carro.findIndex(p => p.id == aidi.id);
        console.log(posicion);
        let cantidades = carro[posicion].cantidad += 1;
       $(`#cant${aidi.id}`).html(/*carro[posicion].cantidad*/cantidades);
        //$("#count").append(carro.length)
       // return cantidades
    }
   $("#toutal").html(`Total: $ ${totalCarrito()}`)

   //$("#count").append(cantidades2)
}



//SUMANDO EL TOTAL
 function totalCarrito () {
    let suma = 0;
    for (const elemento of carro) {
        suma = suma + (elemento.precio * elemento.cantidad);
    }
    return suma;
 }

 /*function cantidades2 (){
    $("#count").empty();
    for (const elemento of carro) {
        let artTotal = artTotal + elemento.unidad
    }
     
 }
 */
 //SI EL USUARIO DESEA CREAR UNA CUENTA PUEDE HACERLO MEDIANTE ESTOS INPUTS
 $("#botonAccount").click (function crear (){
    $("#formularioCuenta").prepend (`
    <formid="form">
    <input id= "name1" type="text" placeholder= "ingresa tu nombre">
    <input id= "edad" type="number" min="18" max="100" placeholder= "ingresa tu edad">
    <input id= "tel" type="number" placeholder= "ingresa tu numero de tel">
    <input id= "calle" type="text" placeholder= "ingresa tu calle">
    </form>
    `)
   
    
})

$("#formularioCuenta").prepend('<button id="btn1">CREAR</button>');
   
//$(".back").css({ background: "gray", color: "black" })
//const formulario = document.getElementById("form")
	//const edad = document.getElementById("edad")
	//const boton = document.getElementById("btn1")




/*function validar (){
if (edad.value < 18){Swal.fire(
    'DEBES TENER MAS DE 18 AÑOS!',
    nombre3,
    'success')
    
    //LOS DATOS INGRESADOS SE GUARDARAN EN ESTE OBJETO CONSTRUCTOR Y SE CONSOLOGEARA
    const usuario1 = new comprador (nombre3,tel,edad,localidad)
console.log (usuario1)

}
else {}

}*/
//boton.addEventListener("click",validar)	*/



$("#btn1").click(function () { 
    let nombre3= $("#name1").val()
    let tel= $("#tel").val()
    let edad= $("#edad").val()
    let localidad= $("#calle").val()
    //LOS DATOS INGRESADOS SE GUARDARAN EN ESTE OBJETO CONSTRUCTOR Y SE CONSOLOGEARA
    //const usuario1 = new comprador (nombre3,tel,edad,localidad)
//console.log (usuario1)
if (nombre3.value == " " ||tel.value == " " ||edad.value == " "||localidad.value == " ") {
Swal.fire(
    'INGRESE DATOS!',
    nombre3,
    'success')}
    else { Swal.fire(
        'GRACIAS POR REGISTRARTE',
        nombre3,
        'success')
        const usuario1 = new comprador (nombre3,tel,edad,localidad) 
       console.log (usuario1)
    }})
       
       /*const { value: ipAddress } = await Swal.fire({
            title: 'Enter your IP address',
            input: 'text',
            inputLabel: 'Your IP address',
            inputValue: inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to write something!'
              }
            }
          })
          
          if (ipAddress) {
            Swal.fire(`Your IP address is ${ipAddress}`)
          }}

)*/

//let jeyson= JSON.stringify (usuario1)


