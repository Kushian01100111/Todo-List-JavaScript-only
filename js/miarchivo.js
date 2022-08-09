Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

fetch('https://api.imgflip.com/get_memes') // llama a una api de memes randoms
    .then(response => response.json())
    .then(data => {//me devuelve una array de memes
        console.log(data)
        let numero = Math.floor(Math.random() * 100)//escoge uno de los 100 que manda
            //asigna el url de la imagen a una variable
        document.getElementById('api').src = data.data.memes[numero].url // y el valor de src de una imagen es cambiado
    });
    
const DateTime = luxon.DateTime;
const Interval = luxon.Interval

document.querySelector('button').addEventListener('click', generaNuevaTarea)//Se pasa el proceso de prompts y alerts a un event listeners que llama 
const tar = document.querySelector('#nombreTarea')
const cate = document.querySelector('#nombreCategoria')

const todasLasTareas = {//El objeto contenedor de las tareas
    "Compras" : [],
    "Trabajo" : [],
    "Universidad" : [],
    "Ocio" : [],
    "Otro" : [],
}

class Tareas{//Constructor con la funcion de crear un nueva tarea
    constructor(tarea,categoria,fecha){
        this.nombre = tarea
        this.categoria = categoria
        this.fechaParaFinalizar = fecha
        this.fechaDeIntroducccion = DateTime.now()
        this.tiempoAFinalizar = humanizeDuration(Interval.fromDateTimes(this.fechaDeIntroducccion,this.fechaParaFinalizar).toDuration().valueOf(),{language: 'es'})
    }
    tuTareaFueAñadida(){//metodo que me muestra que la tarea fue agregada a una categoria con exito
        swal({
            title:`Tu tarea fue añadida con exito!`,
            text: `Tu tarea ${this.nombre} fue añadida a ${this.categoria} el ${this.fechaDeIntroducccion.toLocaleString(DateTime.DATETIME_MED)}`,
            icon: 'success' })
    }
}    

let one ;


function iterarTodasLasCategorias(cate){

    function eliminarTarea(categoria, nombre){
        let noBarrita = (x)=>{
            return x.split("-").join(" ")
        }
        let index; 
        //let elemento = document.getElementById(`${nombre}`)
        let clase = document.querySelector(`.${nombre}`)
        //let tiempiA = document.querySelector(`${(nombre + '1')}`)
        let tareaRemovida = (cate,nom) =>{
           swal({
               title:`Tu tarea fue eliminada con exito`,
               text: `La tarea ${noBarrita(nom)} fue eliminada de la categoria ${cate}`,
               icon: 'success' })
        }
        for(let i = 0; i < todasLasTareas[categoria].length; i++){
              if(todasLasTareas[categoria][i].nombre == nombre){
                index = i
              }
        }
        todasLasTareas[categoria].splice(index, 1)
        localStorage.removeItem(noBarrita(nombre))
        clase.remove()
        tareaRemovida(categoria,nombre)
   }

    let Compras =()=>{//Me generan una lista dependiendo los objetos o tareas que se encuentran dentro de la categoria seleccionada
        let Compras = todasLasTareas["Compras"]
        
         Compras.forEach(n=>{
            let ponerBarrita = (nombre)=>{
                return  nombre.split(" ").join("-")
            } 
            let valor = ponerBarrita(n.nombre)

            let ul = document.createElement('ul')
            document.getElementById('compras').appendChild(ul)
            let li = document.createElement('li')
            ul.appendChild(li)
            let button = document.createElement('button')
            let span =  document.createElement('span')
            li.innerHTML += n.nombre
            li.classList += valor

            li.appendChild(button)
            li.appendChild(span)

            button.innerHTML += 'X'
            button.id += `${valor}`

            span.innerHTML += n.tiempoAFinalizar.split(",").splice(0,2).join(" ")
            document.getElementById(`${valor}`).addEventListener('click', () =>{
                eliminarTarea("Compras",valor)})
         })
        }
        
    let Trabajo = () =>{
            let Trabajo = todasLasTareas["Trabajo"]
        
        Trabajo.forEach(n=>{
            let ponerBarrita = (nombre)=>{
                let per =  nombre.split(" ").join("-")
                return per
            } 
            let valor = ponerBarrita(n.nombre)

           let ul = document.createElement('ul')
           document.getElementById('trabajo').appendChild(ul)
           let li = document.createElement('li')
           ul.appendChild(li)
           let button = document.createElement('button')
           let span =  document.createElement('span')
           li.innerHTML += n.nombre
           li.classList += valor

           li.appendChild(button)
           li.appendChild(span)

           button.innerHTML += 'X'
           button.id += `${valor}`

           span.innerHTML += n.tiempoAFinalizar.split(",").splice(0,2).join(" ")
           document.getElementById(`${valor}`).addEventListener('click', () =>{
               eliminarTarea("Trabajo",valor)})
        })
        
        }
        
    let Universidad= () =>{
        let Universidad = todasLasTareas["Universidad"]
        
         Universidad.forEach(n=>{
            let ponerBarrita = (nombre)=>{
                let per =  nombre.split(" ").join("-")
                return per
            } 
            let valor = ponerBarrita(n.nombre)

            let ul = document.createElement('ul')
            document.getElementById('universidad').appendChild(ul)
            let li = document.createElement('li')
            ul.appendChild(li)
            let button = document.createElement('button')
            let span =  document.createElement('span')
            li.innerHTML += n.nombre
            li.classList += valor

            li.appendChild(button)
            li.appendChild(span)

            button.innerHTML += 'X'
            button.id += `${valor}`

            span.innerHTML += n.tiempoAFinalizar.split(",").splice(0,2).join(" ")
            document.getElementById(`${valor}`).addEventListener('click', () =>{
                eliminarTarea("Universidad",valor)})
         })
        }
        
    let Ocio = () =>{
        let Ocio = todasLasTareas["Ocio"]
        
         Ocio.forEach(n=>{
            let ponerBarrita = (nombre)=>{
                let per =  nombre.split(" ").join("-")
                return per
            } 
            let valor = ponerBarrita(n.nombre)

            let ul = document.createElement('ul')
            document.getElementById('ocio').appendChild(ul)
            let li = document.createElement('li')
            ul.appendChild(li)
            let button = document.createElement('button')
            let span =  document.createElement('span')
            li.innerHTML += n.nombre
            li.classList += valor

            li.appendChild(button)
            li.appendChild(span)

            button.innerHTML += 'X'
            button.id += `${valor}`

            span.innerHTML += n.tiempoAFinalizar.split(",").splice(0,2).join(" ")
            document.getElementById(`${valor}`).addEventListener('click', () =>{
                eliminarTarea("Ocio",valor)})
         })
        }
        
    let Otro= ()=>{
         let Otro = todasLasTareas["Otro"]
        
         Otro.forEach(n=>{
            let ponerBarrita = (nombre)=>{
                let per =  nombre.split(" ").join("-")
                return per
            } 
            let valor = ponerBarrita(n.nombre)


            let ul = document.createElement('ul')
            document.getElementById('otro').appendChild(ul)
            let li = document.createElement('li')
            ul.appendChild(li)
            let button = document.createElement('button')
            let span =  document.createElement('span')
            li.innerHTML += n.nombre
            li.classList += valor

            li.appendChild(button)
            li.appendChild(span)

            button.innerHTML += 'X'
            button.id += `${valor}`

            span.innerHTML += n.tiempoAFinalizar.split(",").splice(0,2).join(" ")
            document.getElementById(`${valor}`).addEventListener('click', () =>{
                eliminarTarea("Otro",valor)})
         })
        }

    switch(cate){
        case "Compras":
            Compras()
            break;
        case "Trabajo":
            Trabajo()
            break;
        case "Universidad":
            Universidad()
            break;
        case "Ocio":
            Ocio()
            break;
        case "Otro":
            Otro()
            break;
        default :
            Compras()
            Trabajo()
            Universidad()
            Ocio()
            Otro()
            break;
    }
}




function generaNuevaTarea(){ //Me genera una nueva tarea con datos provenientes del DOM y de la interaccion del usuario con los inputs del HTML
    let tarea = tar.value
    let categoria = cate.value
    let fecha = DateTime.fromISO(document.getElementById("fechaParaFinalizar").valueAsDate.addDays(1).toISOString());
     if(tarea === '' ||  fecha === undefined){ //Me cheekea si el usuario no escribio un nombre de tarea o no escogio una fecha para finalizar la tarea
        alert("No marcate una fecha o no escribiste el nombre de la tarea, por favor rellene el form de forma correcta")
         } else{
                one = new Tareas(tarea,categoria,fecha)

                todasLasTareas[categoria].shift()

                todasLasTareas[categoria].push(one)

                localStorage.setItem(one.nombre, JSON.stringify(one))// Añade las nuevas tares a localstorage y utiliza JSON stringify para pasar el objeto a JSON.
                one.tuTareaFueAñadida();

                iterarTodasLasCategorias(categoria)
                   
                }         
}


 function revisarLocalStorage(){//me revisa si hay elemento guardados en el localstorege 
    if(localStorage.length > 0 ){//si elementos en localstorege me los introduce en el array de todas las tareas
        for(let i = 0 ;  i < localStorage.length; i++){
            let elemento = localStorage.key(i)
            let elementoParceado = JSON.parse(localStorage.getItem(elemento))
            todasLasTareas[elementoParceado.categoria].push(elementoParceado)
        }
    }else{
        swal("Hola!", "Es la primera vez que utilizas esta aplicacion o no has agregado tareas aun")
    }
 }

 revisarLocalStorage()

iterarTodasLasCategorias()