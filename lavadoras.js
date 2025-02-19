let lavadora= prompt("ingrese lavadora")
let cantidad_lavadora=Number(prompt("cantidad de lavadoras"))
let horas_uso= Number(prompt("ingrese cuantas horas utilizo"))

if (lavadora=="grande") {
    if(cantidad_lavadora<3){
        let costo_hora=horas_uso*4000
        let costo=cantidad_lavadora*costo_hora
        alert(`el valor total a pagar es ${costo}`)
    }else if(cantidad_lavadora>3){
        let costo_hora=horas_uso*4000
        let total_lavadora=cantidad_lavadora*costo_hora
        let descuento=total_lavadora*0.03
        let total_pagar=total_lavadora-descuento
        alert(`el valor total a pagar es ${total_pagar}`)
    }
}else if(lavadora=="pequeña"){
    if (cantidad_lavadora<3) {
        let costo_hora1=horas_uso*3000
        let costo1=cantidad_lavadora*costo_hora1
        alert(`el valor total a pagar del uo de la lavadora pqueña es ${costo1}`)
    }else if(cantidad_lavadora>3){
        let costo_hora1=horas_uso*3000
        let total_lavadora1=cantidad_lavadora*costo_hora1
        let descuento1=total_lavadora1*0.03
        let total_pagar1=total_lavadora1-descuento1
        alert(`el total apagar de la lavadora pequeña es ${total_pagar1}`)
    }
}

