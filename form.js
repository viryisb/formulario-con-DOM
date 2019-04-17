var formulario = document.querySelector("form")

formulario.onsubmit = function(e) {
console.log("hola")





 
  // evitamos que el form se mande 
  e.preventDefault();
  
  // selecciono los elementos del formulario 
  var nombre_form = formulario.elements[0]
 
  
  var edad_form = formulario.elements[1]
  var soltero_form = formulario.elements[2]
  var casado_form = formulario.elements[3]
  var nacionalidad_form = formulario.elements[4]





  // asigno el valor de nombre y edad a variables 
  var nombre = nombre_form.value
  var edad = edad_form.value








  // Creamos una variable "estado" y le asignamos el valor
  // del checkbox que este seleccionado. 
  // Ejemplo, si "soltero" esta seleccionado, "estado" va a ser "soltero"
   var estado = ''
  if (soltero_form.checked) {
    estado = soltero_form.value
  }
  else if (casado_form.checked) {
    estado = casado_form.value
  }
  else estado = 'vacio'
 

  // seleccionamos el select
  // Sacamos el indice de la opcion seleccionada
  // Usando ese indice, buscamos la opcion elegida
  // Asignamos la opcion elegida a la variable "nacionalidad"


  var i = nacionalidad_form.selectedIndex

  var nacionalidad = nacionalidad_form.options[i].value

  // console.log para chequear que nuestros datos esten bien 

  console.log(nombre, edad)

  console.log(nacionalidad)



//   // Ahora validamos, marcando como error en el form: 

  // Nombre no tiene que estar vacio
  if (nombre.length === 0) {
    nombre_form.classList.add("error")
  }

// version alternativa (mas linda)
  // if (!nombre) {
  //   nombre_form.classList.add("error")
  // }


  // edad debe ser mayor a 18 y menor a 120
  if (edad < 18 || edad > 120) {
    edad_form.classList.add("error")
  }

 /*  if (estado === 'vacio') {
    soltero_form.nextElementSibling.classList.add("error") 
    casado_form.nextElementSibling.classList.add("error") 
  }
 */



// // nacionalidades se "autovalidan", 
// // porque ya sabemos que estan seleccionadas. 


if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) 
  && estado !== 'vacio') {
  agregarInvitado(nombre, edad, estado, nacionalidad)
}
}

function agregarInvitado(nombre, edad, estado, nacionalidad) {

 var nuevoUl= document.getElementById("invitados")
  var crearNuevoUl=document.createElement("ul");
  nuevoUl.appendChild(crearNuevoUl);

 /* var lista = document.querySelector("crearNuevoUl") */
  /* console.log(lista)  */
  var elementoLi = document.createElement("li")
  console.log(elementoLi)
  elementoLi.innerText = "Nombre del invitado: " + nombre 
   elementoLi.setAttribute("contenteditable", "true") 
  
  elementiLiEdad=document.createElement ("li")
  crearNuevoUl.appendChild(elementoLi)
 elementoLi.classList.add("lista")
  
 var elementoLiEdad=document.createElement("li")
  elementoLiEdad.innerText=" Edad: " + edad
  elementoLiEdad.setAttribute("contenteditable", "true") 
  crearNuevoUl.appendChild(elementoLiEdad)
 elementoLiEdad.classList.add("lista")
 
  
 var elementoLiEstado=document.createElement("li")
  elementoLiEstado.innerText=" Estado: " + estado 
  elementoLiEstado.setAttribute("contenteditable", "true") 
   crearNuevoUl.appendChild(elementoLiEstado)
  elementoLiEstado.classList.add("lista")
 

 var elementoLiPais=document.createElement("li")
  elementoLiPais.innerText=" Nacionalidad: " + nacionalidad
  elementoLiPais.setAttribute("contenteditable", "true") 
 crearNuevoUl.appendChild(elementoLiPais)
 elementoLiPais.classList.add("lista")
 
 
 var boton=document.createElement("button")
 boton.innerText="eliminar invitado" 
 crearNuevoUl.appendChild(boton)
boton.classList.add("boton_eliminar") 




boton.onclick = function() {
    boton.parentNode.remove()
    
  }
  }
console.log(agregarInvitado)