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
