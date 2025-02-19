let opcion = true
while (opcion) {
 let opciones = Number(prompt("digite 1..12 y 13 para salir"))
switch (opciones) {
        case 0:{ 
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
        break}
        case 1:{
                let materia_fisica = 7
                let materia_quimica = 8
                let materia_biologia = 7
                let materia_matematicas = 8
                let materia_informatica = 9
                let suma_materias = materia_fisica+materia_quimica+materia_biologia+materia_matematicas+materia_informatica
                let porcentaje_materias = suma_materias/50*100

                if (porcentaje_materias<= 59.9) {
                    alert.log(`la calificacion es mala ${porcentaje_materias}`)
                }else if(porcentaje_materias<= 60 && 80){
                    alert.log(`la calificacion es buena ${porcentaje_materias}`)
                }else if(porcentaje_materias<= 80 && 100){
                    alert.log(`la calificacion es exelente ${porcentaje_materias}`)
                }
        
        break;}
        case 2:{
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

        break}
        case 3:{
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
            
        break}
        case 4:{
                let numero=Number(prompt("ingrese un numero"))
                if(numero%2){
                    alert(`el numero ${numero} es impar`)
                }else{
                    alert(`el numero ${numero} es par`)
                }
            
        break}
        case 5:{
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

        break}
        case 6:{
                let numeroModelo = prompt("Ingrese el número de modelo de su automóvil:");

                let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
                
                if (modelosDefectuosos.includes(parseInt(numeroModelo))) {
                    alert("El automóvil está defectuoso, llevar a garantía.");
                } else {
                    alert("Su automóvil no está defectuoso.");
                }

        break}
        case 7:{
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
        break}
        case 8:{
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
        break}
        case 9:{
                let numero1=Number(prompt("ingrese un numero"))
                if(numero1%2){
                    alert(`el numero ${numero1} es impar`)
                }else{
                    alert(`el numero ${numero1} es par`)
                }
        break}
        case 10:{
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

        break}
        case 11:{
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

        break}
        case 12:{
                let numero_copias =prompt("cuantas copias desea imprimir:")
                if (numero_copias<=499) {
                    let total=numero_copias*120
                    alert(`el precio total es de ${total}`)
                }else if (numero_copias<=749) {
                    let nose=numero_copias*100
                    alert(`el precio total es de ${nose}`)
                }else if (numero_copias<=999) {
                    let nose=numero_copias*80
                    alert(`el precio total es de ${nose}`)
                }else if (numero_copias>=1000) {
                    let nose=numero_copias*50
                    alert(`el precio total es de ${nose}`)
                }
        break}
        case 13:{ opcion = false
        break}
    default:
        alert.log("esta opcion no se encuentra disponible digite 0,1,2,3,4,5,6,7,8,9,10,11,12")
        break;
    }
}