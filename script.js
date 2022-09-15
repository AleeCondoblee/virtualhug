function cambiaMensaje () {
    document.getElementById("loading-message").innerText = "Enviado!"
}

setTimeout(cambiaMensaje, 2300)

setTimeout(function () {
    alert("Recibiste Un Abrazo! :D")
}, 2400)