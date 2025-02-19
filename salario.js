let nombre= prompt("ingrese su nombre")
let horas= Number(prompt("ingrese cuantas horas trabajo"))
if(horas ==0){
    alert(`señor ${nombre},sus horas fueron ${horas} y su salario es de 0pesos`)
}else if(horas<=10){
    let nose=horas*30000
    alert(`señor ${nombre},sus horas fueron ${horas} y su salario es de ${nose}pesos`)
}else if(horas>10){
    let otro=horas*33000
    alert(`señor ${nombre},sus horas fueron ${horas} y su salario es de ${otro}pesos`)
}
