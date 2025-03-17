// app3.js - Cola de Atención de Clientes en Supermercado

// Variables iniciales
let cola = []; // Arreglo para la cola de clientes
const CAPACIDAD_MAXIMA = 7; // Capacidad modificada a 7 clientes

// Función para agregar un cliente a la cola
function agregarCliente(nombre) {
    if (cola.length < CAPACIDAD_MAXIMA) {
        cola.push(nombre);
        alert(`Cliente ${nombre} agregado a la cola.\nClientes en espera: ${cola.length}`);
    } else {
        alert("La cola está llena. No se pueden agregar más clientes.");
    }
}

// Función para atender al siguiente cliente
function atenderCliente() {
    if (cola.length > 0) {
        let clienteAtendido = cola.shift(); // Elimina y retorna el primer cliente
        alert(`Cliente ${clienteAtendido} atendido.\nClientes restantes: ${cola.length}`);
    } else {
        alert("No hay clientes en la cola para atender.");
    }
}

// Función para mostrar el estado actual de la cola
function mostrarCola() {
    if (cola.length === 0) {
        return "La cola está vacía.";
    } else {
        let mensaje = "Clientes en la cola:\n";
        for (let i = 0; i < cola.length; i++) {
            mensaje += `${i + 1}. ${cola[i]}\n`;
        }
        return mensaje;
    }
}

// Menú principal
while (true) {
    let opcion = prompt(
        "Cola de Atención - Supermercado\n" +
        "1. Agregar cliente\n" +
        "2. Atender cliente\n" +
        "3. Mostrar cola\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );

    if (opcion === "1") {
        let nombre = prompt("Ingrese el nombre del cliente:");
        if (nombre) { // Verifica que no esté vacío
            agregarCliente(nombre);
        } else {
            alert("Debe ingresar un nombre válido.");
        }
    } else if (opcion === "2") {
        atenderCliente();
    } else if (opcion === "3") {
        alert(mostrarCola());
    } else if (opcion === "4") {
        alert("Saliendo del sistema de cola.");
        break;
    } else {
        alert("Opción inválida.");
    }
}