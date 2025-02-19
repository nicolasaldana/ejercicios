let genero=prompt("ingrese su genero femenino o masculino:")
let edad =prompt("digite su edad")

if (genero=="femenino") {
    if (edad>50) {
        alert("el valor de la ayuda es de 120.000")
    }else if(30<edad<50){
        alert("el valor de la ayuda es de 100.000")
    }else if(edad<30){
        alert("usted no recibe ayuda")
    }
}else if(genero=="masculino"){
    alert("el valor de la ayuda es de 40.000")
}
