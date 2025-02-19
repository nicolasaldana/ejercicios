let materia_fisica = 7
let materia_quimica = 8
let materia_biologia = 7
let materia_matematicas = 8
let materia_informatica = 9
let suma_materias = materia_fisica+materia_quimica+materia_biologia+materia_matematicas+materia_informatica
let porcentaje_materias = suma_materias/50*100

if (porcentaje_materias<= 59.9) {
    console.log(`la calificacion es mala ${porcentaje_materias}`)
}else if(porcentaje_materias<= 60 && 80){
    console.log(`la calificacion es buena ${porcentaje_materias}`)
}else if(porcentaje_materias<= 80 && 100){
    console.log(`la calificacion es exelente ${porcentaje_materias}`)
}
 

