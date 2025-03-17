// app2.js - Cajero Automático de Banco

// Variables iniciales
let saldo = 0;
let transacciones = [0, 0, 0, 0, 0]; // Arreglo para últimas 5 transacciones

// Función para mostrar el saldo
function consultarSaldo() {
    let mensaje = `Saldo actual: $${saldo}\n`;
    mensaje += mostrarTransacciones();
    alert(mensaje);
}

// Función para depositar dinero
function depositar(cantidad) {
    if (cantidad > 0) {
        saldo += cantidad;
        registrarTransaccion(cantidad);
        alert(`Depósito exitoso de $${cantidad}\nSaldo actual: $${saldo}`);
    } else {
        alert("La cantidad a depositar debe ser positiva");
    }
}

// Función para retirar dinero
function retirar(cantidad) {
    if (cantidad > 500) {
        alert("Error: No se pueden retirar más de $500 en una transacción");
    } else if (cantidad <= 0) {
        alert("Error: La cantidad a retirar debe ser positiva");
    } else if (cantidad > saldo) {
        alert("Error: Saldo insuficiente");
    } else {
        saldo -= cantidad;
        registrarTransaccion(-cantidad);
        alert(`Retiro exitoso de $${cantidad}\nSaldo actual: $${saldo}`);
    }
}

// Función para registrar transacciones (mantiene solo las últimas 5)
function registrarTransaccion(cantidad) {
    for (let i = 0; i < transacciones.length - 1; i++) {
        transacciones[i] = transacciones[i + 1];    
    }
    transacciones[transacciones.length - 1] = cantidad;
}

// Función para mostrar historial de transacciones
function mostrarTransacciones() {
    let mensaje = "Últimas 5 transacciones:\n";
    for (let i = 0; i < transacciones.length; i++) {
        if (transacciones[i] !== 0) {
            let tipo = transacciones[i] > 0 ? "Depósito" : "Retiro";
            mensaje += `${i + 1}. ${tipo}: $${Math.abs(transacciones[i])}\n`;
        }
    }
    return mensaje;
}

// Menú principal
while (true) {
    let opcion = prompt(
        "Cajero Automático\n" +
        "1. Consultar saldo\n" +
        "2. Depositar dinero\n" +
        "3. Retirar dinero\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );

    if (opcion === "1") {
        consultarSaldo();
    } else if (opcion === "2") {
        let cantidad = parseFloat(prompt("Ingrese la cantidad a depositar:"));
        depositar(cantidad);
    } else if (opcion === "3") {
        let cantidad = parseFloat(prompt("Ingrese la cantidad a retirar:"));
        retirar(cantidad);
    } else if (opcion === "4") {
        alert("Gracias por usar el cajero automático");
        break;
    } else {
        alert("Opción inválida");
    }
}