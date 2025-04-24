
async function lavarseLosDientes() {
  try {
    const pasta = await ponerPasta();
    console.log("🧴 Pasta lista:", pasta);

    const resultado = await cepillarDientes(pasta); 
    console.log("😄 Resultado:", resultado);
  } catch (error) {
    console.error("❌ Error al cepillarse los dientes:", error);
  }
}

function ponerPasta() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Cepillo con pasta"), 2000);
  });
}

function cepillarDientes(pasta) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${pasta} usado para limpiar los dientes`), 1500);
  });
}

lavarseLosDientes();
console.log("🪥 Empezando rutina de higiene...");