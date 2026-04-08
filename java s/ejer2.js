function valor(){

var valores = [true, 5, false, "hola", "adios",
2];

var suma = (valores[1]+valores[5]);
var resta = (valores[1]-valores[5]);
var poten = (valores[1]**valores[5]);
var divi = (valores[1]/valores[5]);
var multi = (valores[1]*valores[5]);

console.log("La suma es: ", suma);
console.log("La resta es: ", resta);
console.log("La potencia es: ", poten);
console.log("La division es: ", divi);
console.log("La multiplicacion es: ", multi);



if(  valores[3].length < valores[4].length) {

console.log("La afirmación es: ", valores[0]);

}

if(  valores[3].length > valores[4].length) {

console.log("La afirmación es: ", valores[2]);

}

}

