function dni(){

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

var dni1=prompt("ingrese su dni");
var letra=prompt("ingrese su letra");

if (isNaN (dni1) || dni1==null || dni1 < 0 || dni1 > 99999999 ){
console.log("DNI incorrecto");

}

else{

var resto = dni1 % 23;

console.log("El resto es" ,resto);
console.log("La letra elegida es" , letras[resto]);

if(letra==letras[resto]){

    console.log("La letra coincide");
    


}

else{

        console.log("La letra no coincide");

}

}

}