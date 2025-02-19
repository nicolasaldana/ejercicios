let numero_uno =prompt("escriba el primer numero ")
let numero_dos =prompt("escriba el segundo valor ")
let numero_tres =prompt("escriba el tercer numero")

if (numero_uno>numero_dos) {
    if (numero_uno>numero_tres) {
    alert(`el numero ${numero_uno}`)
    }
}else if(numero_dos>numero_uno) {
    if (numero_dos>numero_tres) {
        alert(`el numero ${numero_dos}`)    
    }
    
}else if(numero_tres>numero_dos) {
    if (numero_tres>numero_uno) {
    alert(`el numero ${numero_tres}`)
    }
}
