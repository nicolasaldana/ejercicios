let opcion = true;
while (opcion) {
    let opciones = Number(prompt("Digite 1..12 y 13 para salir"));

    switch (opciones) {
        case 0: {
            // Función para calcular el costo de la lavadora grande
            function calcularCostoLavadoraGrande(cantidad_lavadora, horas_uso) {
                let costo_hora = horas_uso * 4000;
                let costo_total = cantidad_lavadora * costo_hora;

                if (cantidad_lavadora > 3) {
                    let descuento = costo_total * 0.03;
                    return costo_total - descuento;
                }
                return costo_total;
            }

            // Función para calcular el costo de la lavadora pequeña
            function calcularCostoLavadoraPequena(cantidad_lavadora, horas_uso) {
                let costo_hora = horas_uso * 3000;
                let costo_total = cantidad_lavadora * costo_hora;

                if (cantidad_lavadora > 3) {
                    let descuento = costo_total * 0.03;
                    return costo_total - descuento;
                }
                return costo_total;
            }

            // Función principal para solicitar los datos y mostrar el costo
            function calcularTotal() {
                let lavadora = prompt("Ingrese el tipo de lavadora (grande o pequeña):");
                let cantidad_lavadora = Number(prompt("Cantidad de lavadoras:"));
                let horas_uso = Number(prompt("Ingrese cuántas horas utilizó:"));

                if (lavadora === "grande") {
                    let costo = calcularCostoLavadoraGrande(cantidad_lavadora, horas_uso);
                    alert(`El valor total a pagar es ${costo}`);
                } else if (lavadora === "pequeña") {
                    let costo = calcularCostoLavadoraPequena(cantidad_lavadora, horas_uso);
                    alert(`El valor total a pagar de la lavadora pequeña es ${costo}`);
                } else {
                    alert("Tipo de lavadora no válido.");
                }
            }

            // Llamada a la función principal
            calcularTotal();
        }
        break;

        case 1: {
            // Función para calcular el porcentaje total
            function calcularPorcentaje(materia_fisica, materia_quimica, materia_biologia, materia_matematicas, materia_informatica) {
                let suma_materias = materia_fisica + materia_quimica + materia_biologia + materia_matematicas + materia_informatica;
                return (suma_materias / 50) * 100;
            }

            // Función para evaluar la calificación
            function evaluarCalificacion(porcentaje) {
                if (porcentaje <= 59.9) {
                    alert(`La calificación es mala: ${porcentaje}%`);
                } else if (porcentaje >= 60 && porcentaje <= 80) {
                    alert(`La calificación es buena: ${porcentaje}%`);
                } else if (porcentaje > 80 && porcentaje <= 100) {
                    alert(`La calificación es excelente: ${porcentaje}%`);
                }
            }

            // Función principal para obtener las calificaciones del usuario
            function obtenerCalificaciones() {
                let materia_fisica = Number(prompt("Ingrese la calificación de Física (0-10):"));
                let materia_quimica = Number(prompt("Ingrese la calificación de Química (0-10):"));
                let materia_biologia = Number(prompt("Ingrese la calificación de Biología (0-10):"));
                let materia_matematicas = Number(prompt("Ingrese la calificación de Matemáticas (0-10):"));
                let materia_informatica = Number(prompt("Ingrese la calificación de Informática (0-10):"));

                // Calculamos el porcentaje
                let porcentaje_materias = calcularPorcentaje(materia_fisica, materia_quimica, materia_biologia, materia_matematicas, materia_informatica);

                // Evaluamos la calificación
                evaluarCalificacion(porcentaje_materias);
            }

            // Llamada a la función principal
            obtenerCalificaciones();
        }
        break;

       
        case 2:{
            // Función para calcular el costo según los días
            function calcularCosto(dias) {
                let costo = 0;

                // Condiciones para calcular el costo según los días
                if (dias === 15) {
                    costo = 18000;
                } else if (dias === 30) {
                    costo = 35000;
                } else if (dias === 90) {
                    costo = 86000;
                } else {
                    return "Plan no válido, elige 15, 30 o 90 días";
                }
                return `El costo por ${dias} días es ${costo}`;
            }

            // Función principal para solicitar los días y mostrar el costo
            function mostrarCosto() {
                let diascosto = Number(prompt("Escribe cuántos días te quieres quedar (15, 30 o 90 días):"));
                let mensaje = calcularCosto(diascosto); // Llamada a la función calcularCosto
                alert(mensaje); // Mostrar el resultado
            }

            // Llamada a la función principal
            mostrarCosto();

        break}
        case 3: {
            // Función para obtener el número mayor
            function obtenerMayor(numero_uno, numero_dos, numero_tres) {
                if (numero_uno > numero_dos && numero_uno > numero_tres) {
                    return numero_uno;
                } else if (numero_dos > numero_uno && numero_dos > numero_tres) {
                    return numero_dos;
                } else if (numero_tres > numero_uno && numero_tres > numero_dos) {
                    return numero_tres;
                } else {
                    return "Hay dos o más números iguales.";
                }
            }
        
            // Función principal para solicitar los números
            function encontrarNumeroMayor() {
                let numero_uno = Number(prompt("Escribe el primer número:"));
                let numero_dos = Number(prompt("Escribe el segundo número:"));
                let numero_tres = Number(prompt("Escribe el tercer número:"));
        
                let mayor = obtenerMayor(numero_uno, numero_dos, numero_tres);
                alert(`El número mayor es: ${mayor}`);
            }
        
            // Llamada a la función principal
            encontrarNumeroMayor();
            
            break;
        }
        
        case 4: {
            // Función para verificar si un número es par o impar
            function verificarParImpar(numero) {
                if (numero % 2 === 0) {
                    return `${numero} es par`;
                } else {
                    return `${numero} es impar`;
                }
            }
        
            // Función principal para solicitar el número
            function comprobarNumero() {
                let numero = Number(prompt("Ingresa un número:"));
                let resultado = verificarParImpar(numero);
                alert(resultado);
            }
        
            // Llamada a la función principal
            comprobarNumero();
        
            break;
        }
        
        case 5: {
            // Función para calcular el salario
            function calcularSalario(horas) {
                if (horas === 0) {
                    return 0; // Si no trabajó, el salario es 0
                } else if (horas <= 10) {
                    return horas * 30000; // Si trabajó entre 1 y 10 horas, paga 30,000 por hora
                } else {
                    return horas * 33000; // Si trabajó más de 10 horas, paga 33,000 por hora
                }
            }
        
            // Función principal para solicitar el nombre y las horas trabajadas
            function calcularSalarioEmpleado() {
                let nombre = prompt("Ingrese su nombre:");
                let horas = Number(prompt("Ingrese cuántas horas trabajó:"));
        
                let salario = calcularSalario(horas); // Calcula el salario según las horas trabajadas
                alert(`Señor(a) ${nombre}, sus horas fueron ${horas} y su salario es de ${salario} pesos.`);
            }
        
            // Llamada a la función principal
            calcularSalarioEmpleado();
        
            break;
        }
        
        case 6: {
            // Función para verificar si el modelo del automóvil está defectuoso
            function verificarModeloDefectuoso(numeroModelo) {
                let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
                
                if (modelosDefectuosos.includes(parseInt(numeroModelo))) {
                    return true; // El modelo está defectuoso
                } else {
                    return false; // El modelo no está defectuoso
                }
            }
        
            // Función principal para solicitar el número de modelo y mostrar el resultado
            function verificarAutomovil() {
                let numeroModelo = prompt("Ingrese el número de modelo de su automóvil:");
        
                if (verificarModeloDefectuoso(numeroModelo)) {
                    alert("El automóvil está defectuoso, llevar a garantía.");
                } else {
                    alert("Su automóvil no está defectuoso.");
                }
            }
        
            // Llamada a la función principal
            verificarAutomovil();
        
            break;
        }
        
        case 7:{
               // Función para calcular el valor de la ayuda según género y edad
            function obtenerValorAyuda(genero, edad) {
                genero = genero.toLowerCase(); // Para aceptar mayúsculas o minúsculas

                if (genero === "femenino") {
                    if (edad > 50) {
                        return 120000;
                    } else if (edad > 30 && edad <= 50) { // Corregimos la condición
                        return 100000;
                    } else if (edad <= 30) {
                        return 0; // No recibe ayuda
                    }
                } else if (genero === "masculino") {
                    return 40000; // Valor fijo para masculino
                }
                return null; // Género no válido
            }

            // Función principal para procesar la lógica
            function procesarCaso7() {
                let genero = prompt("Ingrese su género (femenino o masculino):");
                let edad = parseInt(prompt("Digite su edad"), 10); // Convertimos a número

                // Validamos que la edad sea un número válido
                if (isNaN(edad) || edad < 0) {
                    alert("Por favor, ingrese una edad válida.");
                    return;
                }

                let valorAyuda = obtenerValorAyuda(genero, edad);

                if (valorAyuda === null) {
                    alert("Género no válido. Use 'femenino' o 'masculino'.");
                } else if (valorAyuda === 0) {
                    alert("Usted no recibe ayuda.");
                } else {
                    alert(`El valor de la ayuda es de ${valorAyuda}`);
                }
            }

            // Simulamos el case 7 ejecutando la función
            procesarCaso7();
        break}
        case 8:{
            function pedirTamaño() {
                let tamaño = prompt("¿Cuál es el tamaño de su sándwich? (pequeño/grande)").toLowerCase();
                if (tamaño !== "pequeño" && tamaño !== "grande") {
                    alert("Tamaño no válido. Por favor, ingrese 'pequeño' o 'grande'.");
                    return pedirTamaño(); // Repetir si la entrada es inválida
                }
                return tamaño;
            }
            
            function pedirIngrediente(ingrediente) {
                let respuesta = prompt(`¿Desea agregar ${ingrediente}? (si/no)`).toLowerCase();
                return respuesta === "si" ? 1 : 0; // Retorna 1 si sí, 0 si no
            }
            
            function calcularPrecioSándwich(tamaño) {
                return tamaño === "pequeño" ? 6000 : 12000;
            }
            
            function calcularPedidoSandwich() {
                let tamaño = pedirTamaño();
                let precioSándwich = calcularPrecioSándwich(tamaño);
                
                // Llamada a la función para cada ingrediente
                let precioTocineta = pedirIngrediente("tocineta") ? 3000 : 0;
                let precioJalapeno = pedirIngrediente("jalapeño") ? 0 : 0; // Gratis
                let precioPavo = pedirIngrediente("pavo") ? 3000 : 0;
                let precioQueso = pedirIngrediente("queso") ? 2500 : 0;
            
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
                // Función para pedir un número al usuario
            function pedirNumero() {
                return Number(prompt("Ingrese un número"));
            }

            // Función para determinar si el número es par o impar
            function esImpar(numero) {
                return numero % 2 !== 0;
            }

            // Función para mostrar el resultado
            function mostrarResultado(numero) {
                if (esImpar(numero)) {
                    alert(`El número ${numero} es impar`);
                } else {
                    alert(`El número ${numero} es par`);
                }
            }

            // Función principal para ejecutar el proceso
            function procesarNumero() {
                let numero1 = pedirNumero();  // Pedir el número
                mostrarResultado(numero1);    // Mostrar el resultado
            }

            procesarNumero();  // Llamar a la función principal

        break}
        case 10:{
                // Función para pedir el operador al usuario
            function pedirOperador() {
                return prompt("Ingrese su operador (Tigo, Claro, Movistar):");
            }

            // Función para pedir la cantidad de minutos internacionales consumidos
            function pedirMinutos() {
                return parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
            }

            // Función para obtener el cargo fijo y valor por minuto según el operador
            function obtenerDetallesOperador(operador) {
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
                    return undefined; // Retorna undefined si el operador no es válido
                }

                return { cargoFijo, valorMinuto }; // Devuelve un objeto con los detalles
            }

            // Función para calcular el costo total
            function calcularCosto(cargoFijo, valorMinuto, minutosInternacionales) {
                return cargoFijo + (minutosInternacionales * valorMinuto);
            }

            // Función principal para ejecutar el proceso
            function procesarCosto() {
                let operador = pedirOperador();  // Pedir el operador
                let minutosInternacionales = pedirMinutos();  // Pedir los minutos consumidos

                let detalles = obtenerDetallesOperador(operador);  // Obtener los detalles del operador

                if (detalles) {
                    let costoTotal = calcularCosto(detalles.cargoFijo, detalles.valorMinuto, minutosInternacionales);
                    alert("El costo total es: " + costoTotal);
                }
            }

            procesarCosto();  // Llamar a la función principal


        break}
        case 11:{
                // Función para preguntar si la computadora emite un pitido al iniciarse
            function preguntarPitido() {
                return confirm("¿La computadora emite un pitido al iniciarse?");
            }

            // Función para preguntar si el disco duro gira
            function preguntarDiscoDuro() {
                return confirm("¿El disco duro gira?");
            }

            // Función para mostrar el mensaje correspondiente según el estado de la computadora
            function mostrarMensaje(pitido, discoDuroGira) {
                if (pitido && discoDuroGira) {
                    alert("Está averiada.");
                } else if (pitido && !discoDuroGira) {
                    alert("Verificar contactos de la unidad.");
                } else if (!pitido && !discoDuroGira) {
                    alert("Traiga la computadora para repararla en la central.");
                } else if (!pitido && discoDuroGira) {
                    alert("Compruebe las conexiones de altavoces.");
                }
            }

            // Función principal para ejecutar el proceso
            function diagnosticarComputadora() {
                let pitido = preguntarPitido();  // Preguntar sobre el pitido
                let discoDuroGira = preguntarDiscoDuro();  // Preguntar sobre el disco duro

                mostrarMensaje(pitido, discoDuroGira);  // Mostrar el mensaje según las respuestas
            }

            diagnosticarComputadora();  // Llamar a la función principal


        break}
        case 12:{
                // Función para pedir la cantidad de copias
            function pedirNumeroCopias() {
                return prompt("¿Cuántas copias desea imprimir?");
            }

            // Función para calcular el precio según el número de copias
            function calcularPrecio(numeroCopias) {
                let precioPorCopia;

                if (numeroCopias <= 499) {
                    precioPorCopia = 120;
                } else if (numeroCopias <= 749) {
                    precioPorCopia = 100;
                } else if (numeroCopias <= 999) {
                    precioPorCopia = 80;
                } else if (numeroCopias >= 1000) {
                    precioPorCopia = 50;
                }

                return numeroCopias * precioPorCopia;
            }

            // Función para mostrar el resultado
            function mostrarPrecio(total) {
                alert(`El precio total es de ${total}`);
            }

            // Función principal para realizar el proceso
            function calcularYMostrarPrecio() {
                let numeroCopias = parseInt(pedirNumeroCopias());  // Pedir el número de copias
                let total = calcularPrecio(numeroCopias);  // Calcular el precio total
                mostrarPrecio(total);  // Mostrar el resultado
            }

            calcularYMostrarPrecio();  // Llamar a la función principal

        break}
        case 13:{ opcion = false
        break}
    default:
        alert.log("esta opcion no se encuentra disponible digite 0,1,2,3,4,5,6,7,8,9,10,11,12")
        break;
        
    }
}
