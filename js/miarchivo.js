Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let noBarrita = (x)=>{
    return x.split("-").join(" ")
}

let ponerBarrita = (nombre)=>{
    return  nombre.split(" ").join("-")
} 

let tareaRemovida = (cate,nom) =>{
    swal({
        title:`Tu tarea fue eliminada con exito`,
        text: `La tarea ${noBarrita(nom)} fue eliminada de la categoria ${cate}`,
        icon: 'success' })
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



function eliminarTarea(categoria, nombre){
    let index; 
    let clase = document.querySelector(`.${nombre}`)
    
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

function tareaCompleta(categoria, nombre){
    let index; 
    let clase = document.querySelector(`.${nombre}`)
    
    for(let i = 0; i < todasLasTareas[categoria].length; i++){
          if(todasLasTareas[categoria][i].nombre == noBarrita(nombre)){
            index = i
          }
    }
    todasLasTareas[categoria][index].tiempoAFinalizar = 'Completo'

        let dataStorege = JSON.parse(localStorage.getItem(`${noBarrita(nombre)}`))
        dataStorege.tiempoAFinalizar = 'Completo'
        localStorage.setItem(`${noBarrita(nombre)}`, JSON.stringify(dataStorege))

    document.querySelector(`.${nombre}>p`).classList += " completo"    
    location.reload()
}


function iterarTodasLasCategorias(cate){
    if(cate !== undefined){
        for (let categoria in todasLasTareas) {
            categoria = cate
            todasLasTareas[categoria].forEach(n=> {
                let valor = ponerBarrita(n.nombre)
                let ul = document.createElement('ul')

                    document.getElementById(`${categoria}`).appendChild(ul)

                let li = document.createElement('li')

                    ul.appendChild(li)

                let button = document.createElement('button')
                let span =  document.createElement('span')
                let p =  document.createElement('p')
                    li.classList += valor

                    li.appendChild(p)
                    li.appendChild(span)
                    li.appendChild(button)

                    p.innerHTML += n.nombre
        
                    button.innerHTML += 'X'
                    button.id += `${valor}`
        
                    span.innerHTML += n.tiempoAFinalizar.split(",").splice(0,2).join(" ")
                    span.classList += 'span'

                    document.querySelector(`.${valor}`).addEventListener('click', () =>{
                        tareaCompleta(`${categoria}`,valor)
                    })
                    document.getElementById(`${valor}`).addEventListener('click', () =>{
                    eliminarTarea(`${categoria}`,valor)})
                        if(n.tiempoAFinalizar === 'Completo'){
                            p.classList += ' completo'
                        }
            })
            break
        }
    }else{
        for (let categoria in todasLasTareas) {
            todasLasTareas[categoria].forEach(n=> {
                let valor = ponerBarrita(n.nombre)
                let ul = document.createElement('ul')

                    document.getElementById(`${categoria}`).appendChild(ul)

                let li = document.createElement('li')

                    ul.appendChild(li)
                let button = document.createElement('button')
                let span =  document.createElement('span')
                let p =  document.createElement('p')
                    li.classList += valor
        
                    li.appendChild(p)
                    li.appendChild(span)            
                    li.appendChild(button)

                    p.innerHTML += n.nombre
        
                    button.innerHTML += 'X'
                    button.id += `${valor}`
        
                    span.innerHTML += n.tiempoAFinalizar.split(",").splice(0,2).join(" ")
                    span.classList += 'span'

                    document.querySelector(`.${valor}`).addEventListener('click', () =>{
                        tareaCompleta(`${categoria}`,valor)
                    })
                    document.getElementById(`${valor}`).addEventListener('click', () =>{
                    eliminarTarea(`${categoria}`,valor)})
                        if(n.tiempoAFinalizar === 'Completo'){
                            p.classList += ' completo'
                        }
            })
        }
    }
}



let one ;

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