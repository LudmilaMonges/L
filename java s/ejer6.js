function funci (){
    var pari=prompt("ingrese un numero");

    if (isNaN (pari) || pari==null || pari < 0 || pari ==""){

        console.log("Error")

    }
    else{
        if (pari%2==0 ){
        console.log("El numero es par")
        }
        else{
         console.log("El numero es impar")
        }
        }
    
}