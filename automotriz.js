let numeroModelo = prompt("Ingrese el número de modelo de su automóvil:");

let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

if (modelosDefectuosos.includes(parseInt(numeroModelo))) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}