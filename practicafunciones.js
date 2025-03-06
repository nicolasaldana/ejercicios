//1
const duplicar = (num) => num * 2;

console.log(duplicar(5));  
console.log(duplicar(-3));  
console.log(duplicar(0));  

//2

const esPar = (num) => num % 2 === 0;

console.log(esPar(4));  
console.log(esPar(7));  
console.log(esPar(-2)); 

//3

const sumarDobles = (a, b) => (a * 2) + (b * 2);

console.log(sumarDobles(3, 4)); 
console.log(sumarDobles(1, 0)); 
console.log(sumarDobles(-2, 5));

//4

const potencia = (base, exp) => base ** exp;

console.log(potencia(2, 3)); 
console.log(potencia(5, 2)); 
console.log(potencia(3, 0)); 

//5

const maximo = (a, b) => Math.max(a, b);

console.log(maximo(5, 3));  
console.log(maximo(-2, 10));
console.log(maximo(4, 4));  
