function palin(){
 
    let cadena=prompt("ingrese un texto");

    let cadenaAnalizado = cadena.replaceAll(" ", "").toLocaleLowerCase();
    let cadenaModificada = cadenaAnalizado.split("").reverse().join("");

     if(!isNaN (cadena) || cadena==null || cadena ==""){
        console.log("Error , intente de nuevo");

}
    else {

        if(cadena == cadenaModificada){
             console.log("Es un palindromo");


        }

        else if (cadena !== cadenaModificada){

             console.log("No es un palindromo");


        }
    }

}