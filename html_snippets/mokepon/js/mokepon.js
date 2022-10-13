let ataqueJugador
let ataqueEnemigo
let VidasJugador = 3
let VidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
    // el addEventListener sirve para escuchar eventos 
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("selecionar-mascota")
    sectionSeleccionarMascota.style.display = "none"


    let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

   let inputHipodoge = document.getElementById("hipodoge")
   let inputcapipepo = document.getElementById("capipepo")
   let inputRatigueya = document.getElementById("ratigueya")
   let spanMascotaJugador = document.getElementById("mascota-jugador")

    // el inner sirve para modificar el contenido interno de un elemento en html utlizando javascript

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo 
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo 
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo 
    } else {
        crearMensaje("PERDISTE")
        VidasJugador--
        spanVidasJugador.innerHTML = VidasJugador 
    }

    revisarVidas()
}   

function revisarVidas() {
    if (VidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🎉")
    } else if (VidasJugador == 0) {
        crearMensajeFinal("Lo siento, perdiste 😥")
    }  
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
   
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado")
    
    sectionMensajes.innerHTML = resultadoFinal

    // Disabled es un atributo que sirve para desabilitar un boton
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()        
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)