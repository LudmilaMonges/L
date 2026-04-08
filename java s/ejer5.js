function factorial () {
    var numerod=prompt("ingrese un numero");
    if (isNaN (numerod) || numerod==null || numerod < 0 || numerod =="" ){ 
        console.log("Error , intente de nuevo ")
    }

    else{
    let resulta = 1;
    for(let i =numerod; i>0; i--){
        resulta = resulta * i;
        console.log(numerod, "! = ", numerod, "x", i);
    }
    console.log("El resultado es" , resulta);

}

}