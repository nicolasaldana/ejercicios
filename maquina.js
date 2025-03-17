// app4.js - Máquina Expendedora de Dulces y Gaseosas

// Variables iniciales
let productos = ["Chocolatina", "Gaseosa", "Galletas", "Chicles", "Caramelo"];
let cantidades = [5, 3, 4, 6, 2]; // Cantidades iniciales de cada producto
const PRECIO = 1; // Precio fijo por producto ($1)
let dineroInsertado = 0;

// Función para mostrar el inventario
function mostrarInventario() {
    let mensaje = "Inventario de la máquina:\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i]} - Cantidad: ${cantidades[i]}\n`;
    }
    return mensaje;
}

// Función para procesar el pago
function insertarMoneda() {
    dineroInsertado += PRECIO;
    alert(`Moneda de $${PRECIO} insertada. Total: $${dineroInsertado}`);
}

// Función para encontrar un producto disponible
function sugerirProducto() {
    for (let i = 0; i < cantidades.length; i++) {
        if (cantidades[i] > 0) {
            return `Sugerencia: ${productos[i]} (Código ${i + 1})`;
        }
    }
    return "No hay productos disponibles.";
}

// Función para comprar un producto
function comprarProducto(codigo) {
    let indice = codigo - 1; // Ajustar código al índice del arreglo
    if (dineroInsertado < PRECIO) {
        alert("Por favor, inserte una moneda de $1 antes de comprar.");
    } else if (indice < 0 || indice >= productos.length) {
        alert("Código inválido. Seleccione un número entre 1 y 5.");
    } else if (cantidades[indice] === 0) {
        let sugerencia = sugerirProducto();
        alert(`Producto ${productos[indice]} agotado.\n${sugerencia}`);
    } else {
        cantidades[indice]--;
        dineroInsertado -= PRECIO;
        alert(`Producto ${productos[indice]} entregado.\nGracias por su compra!`);
    }
}

// Menú principal
while (true) {
    let opcion = prompt(
        "Máquina Expendedora\n" +
        "1. Mostrar inventario\n" +
        "2. Insertar moneda ($1)\n" +
        "3. Comprar producto\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );

    if (opcion === "1") {
        alert(mostrarInventario());
    } else if (opcion === "2") {
        insertarMoneda();
    } else if (opcion === "3") {
        let codigo = parseInt(prompt("Ingrese el código del producto (1-5):"));
        comprarProducto(codigo);
    } else if (opcion === "4") {
        alert("Saliendo de la máquina expendedora.");
        break;
    } else {
        alert("Opción inválida.");
    }
}