function MayuMinu(){
    
    var texto=prompt("ingrese un texto");



    if(!isNaN (texto) || texto==null || texto ==""){
        console.log("Error , intente de nuevo");

}
else {

    if(texto===texto.toLowerCase()){

        console.log("El texto ingresado: " , texto , "  .Esta conformado por Minusculas");

    }

    else if(texto===texto.toUpperCase()){

        console.log("El texto ingresado: " , texto , "  .Esta conformado por Mayusculas");
    }

    else{

        console.log("El texto ingresado: " , texto , "  .Esta conformado por mayusculas y minusculas");
    }
}
}