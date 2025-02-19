let pitido = confirm("¿La computadora emite un pitido al iniciarse?");
let discoDuroGira = confirm("¿El disco duro gira?");

if (pitido && discoDuroGira) {
    alert("Está averiada.");
} else if (pitido && !discoDuroGira) {
    alert("Verificar contactos de la unidad.");
} else if (!pitido && !discoDuroGira) {
    alert("Traiga la computadora para repararla en la central.");
} else if (!pitido && discoDuroGira) {
    alert("Compruebe las conexiones de altavoces.");
}