function calcularPedidoSandwich() {

    let tamaño = prompt("¿Cuál es el tamaño de su sándwich? (pequeño/grande)").toLowerCase();

    if (tamaño !== "pequeño" && tamaño !== "grande") {
        alert("Tamaño no válido. Por favor, ingrese 'pequeño' o 'grande'.");
        return;
    }

    let tocineta = prompt("¿Desea agregar tocineta? (si/no)").toLowerCase();
    let jalapeno = prompt("¿Desea agregar jalapeño? (si/no)").toLowerCase();
    let pavo = prompt("¿Desea agregar pavo? (si/no)").toLowerCase();
    let queso = prompt("¿Desea agregar queso? (si/no)").toLowerCase();

    let precioSándwich = tamaño === "pequeño" ? 6000 : 12000;
    let precioTocineta = (tocineta === "si") ? 3000 : 0;
    let precioJalapeno = (jalapeno === "si") ? 0 : 0;
    let precioPavo = (pavo === "si") ? 3000 : 0;
    let precioQueso = (queso === "si") ? 2500 : 0;

    let total = precioSándwich + precioTocineta + precioJalapeno + precioPavo + precioQueso;

    alert(`El precio total de su sándwich es:
        Tamaño: ${tamaño.charAt(0).toUpperCase() + tamaño.slice(1)} - $${precioSándwich}
        Tocineta: $${precioTocineta}
        Jalapeño: $${precioJalapeno} (Gratis)
        Pavo: $${precioPavo}
        Queso: $${precioQueso}
        Total a pagar: $${total}`);
}

calcularPedidoSandwich();