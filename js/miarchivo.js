document.querySelector('button').addEventListener('click', generaNuevaTarea)//Se pasa el proceso de prompts y alerts a un event listeners que llama 
const tar = document.querySelector('#nombreTarea')
const cate = document.querySelector('#nombreCategoria')
let fechasParaFinalizar ;
document.getElementById("fechaParaFinalizar").addEventListener("change", function() { //Agarra el valor de la fecha a partir del input de Date.
    let input = this.value;
    let dateEntered = new Date(input);
     fechasParaFinalizar = input
     console.log(input)
})

function capitalizeFirstLetter(string) {//Esta funcion capitaliza la primera palabra de un string
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
const todasLasTareas = {//El objeto contenedor de las tareas
    "Compras" : [],
    "Trabajo" : [],
    "Universidad" : [],
    "Ocio" : [],
    "Otro" : []},
      categorias = ["COMPRAS","TRABAJO","UNIVERSIDAD","OCIO","OTRO"]//Array que posee las categorias posibles de entrada
 

class Tareas{//Constructor con la funcion de crear un nueva tarea
    constructor(tarea,categoria,fecha){
        this.nombre = tarea
        this.categoria = categoria
        this.fechaParaFinalizar = fecha
        this.fechaDeIntroducccion = new Date
    }
    tuTareaFueAñadida(){//metodo que me muestra que la tarea fue agregada a una categoria con exito
        alert(`Tu tarea ${this.nombre} fue añadida a ${this.categoria} el ${this.fechaDeIntroducccion.getDate()}/${this.fechaDeIntroducccion.getUTCMonth()+ 1}/${this.fechaDeIntroducccion.getFullYear()}`)
    }
}    

let one ;

function Compras (){//Me generan una lista dependiendo los objetos o tareas que se encuentran dentro de la categoria seleccionada
let Compras = todasLasTareas["Compras"]

 Compras.forEach(n=>{
    let ul = document.createElement('ul')
    document.getElementById('compras').appendChild(ul)
    let li = document.createElement('li')
    ul.appendChild(li)

    li.innerHTML += n.nombre
 })
}

function Trabajo(){
    let Trabajo = todasLasTareas["Trabajo"]

Trabajo.forEach(n=>{
   let ul = document.createElement('ul')
   document.getElementById('trabajo').appendChild(ul)
   let li = document.createElement('li')
   ul.appendChild(li)

   li.innerHTML += n.nombre
})

}

function Universidad(){
let Universidad = todasLasTareas["Universidad"]

 Universidad.forEach(n=>{
    let ul = document.createElement('ul')
    document.getElementById('universidad').appendChild(ul)
    let li = document.createElement('li')
    ul.appendChild(li)

    li.innerHTML += n.nombre
 })
}

function Ocio(){
let Ocio = todasLasTareas["Ocio"]

 Ocio.forEach(n=>{
    let ul = document.createElement('ul')
    document.getElementById('ocio').appendChild(ul)
    let li = document.createElement('li')
    ul.appendChild(li)

    li.innerHTML += n.nombre
 })
}

function Otro(){
 let Otro = todasLasTareas["Otro"]

 Otro.forEach(n=>{
    let ul = document.createElement('ul')
    document.getElementById('otro').appendChild(ul)
    let li = document.createElement('li')
    ul.appendChild(li)

    li.innerHTML += n.nombre
 })
}


function generaNuevaTarea(){ //Me genera una nueva tarea con datos provenientes del DOM y de la interaccion del usuario con los inputs del HTML
    let tarea = tar.value
    let categoria = cate.value
    let fecha = fechaParaFinalizar
     if(tarea === '' ||  fecha === undefined){ //Me cheekea si el usuario no escribio un nombre de tarea o no escogio una fecha para finalizar la tarea
        alert("No marcate una fecha o no escribiste el nombre de la tarea, por favor rellene el form de forma correcta")
         } else{
            if(categorias.indexOf(categoria.toUpperCase())  !== -1){
                one = new Tareas(tarea,categoria,fecha)
                todasLasTareas[categoria].shift()
                 todasLasTareas[categoria].push(one)
                one.tuTareaFueAñadida()
               if(categoria === "Compras"){
                Compras()
               }else if(categoria === "Trabajo"){
                Trabajo()
               }else if(categoria === "Universidad"){
                Universidad()
               }else if(categoria === "Ocio"){
                Ocio()
               }else{
                Otro()
               }
             }
         }
 }   

 


 
 

 


 
