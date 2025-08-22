// Variable de tipo array para almacenar nombres de amigos 
let amigos = [];

// Expresión para validar que solo contenga letras y espacios 
const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; 

// FUNCIÓN PARA AGREGAR AMIGOS 
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // trim() para quitar espacios extra 

    // Validar la entrada: campo no esté vacío 
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que solo contenga letras (no números ni símbolos)
    if (!soloLetras.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        input.focus(); 
        return;
    }

    // Validar que no se repita el nombre
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Este nombre ya está en la lista.");
        input.focus();
        return;
    }

    // Actualizar el array de amigos usando push() 
    amigos.push(nombre);
    
    // Limpiar el campo de entrada 
    input.value = "";
    
    // Mantener foco para seguir agregando nombres
    input.focus();
    
    // Llamar función para mostrar la lista actualizada
    mostrarAmigos();
    
    // Habilitar botón de sorteo si hay al menos 2 amigos
    actualizarBotonSorteo();
}
// FUNCIÓN PARA MOSTRAR LA LISTA 
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo usando bucle for 
    for (let i = 0; i < amigos.length; i++) {
        // Crear elementos de lista para cada amigo 
        let li = document.createElement("li");
        li.textContent = amigos[i];
        
        // Agregar elementos a la lista
        lista.appendChild(li);
    }
}
// FUNCIÓN PARA SORTEAR AMIGO 
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    // Verificar que haya al menos 2 amigos
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }
    
    // Generar índice aleatorio 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado 
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior
    
    // Crear elemento li para mostrar el resultado
    let li = document.createElement("li");
    li.textContent = "Tu amigo secreto es: " + amigoSorteado;
    resultado.appendChild(li);
}
// Función para actualizar estado del botón de sorteo
function actualizarBotonSorteo() {
    let botonSorteo = document.querySelector(".button-draw");
    
    if (amigos.length >= 2) {
        botonSorteo.disabled = false;
        botonSorteo.style.opacity = "1";
    } else {
        botonSorteo.disabled = true;
        botonSorteo.style.opacity = "0.6";
    }
}
