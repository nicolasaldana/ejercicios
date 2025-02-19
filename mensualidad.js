function calcularcosto(dias) {
    let costo = 0
    if (dias === 15) {
        costo=18000
    }else if (dias === 30) {
        costo=35000
    }else if (dias === 90) {
        costo=86000
    }else{
        return("plan no valido elige 15, 30 o 90 dias")
    }
    return `el costo por ${dias} es ${costo}`
}
let diascosto = Number(prompt(`escriba cuantos dias se quiere quedar`)) 
alert(calcularcosto(diascosto))