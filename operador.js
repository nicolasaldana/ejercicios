let operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):");
let minutosInternacionales = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
let cargoFijo, valorMinuto;

if (operador === "Tigo") {
    cargoFijo = 45000;
    valorMinuto = 200;
} else if (operador === "Claro") {
    cargoFijo = 30000;
    valorMinuto = 100;
} else if (operador === "Movistar") {
    cargoFijo = 40000;
    valorMinuto = 250;
} else {
    alert("Operador no válido.");
}

if (cargoFijo !== undefined) {
    let costoTotal = cargoFijo + (minutosInternacionales * valorMinuto);
    alert("El costo total es: " + costoTotal);
}