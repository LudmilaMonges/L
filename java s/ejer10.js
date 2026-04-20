function dado (){

let dadines = [0,0,0,0,0,0,0,0,0,0,0,0,0];

for(let i=1; i <=36000; i++){

let dado1 = Math.floor(Math.random() * 6 ) + 1;
let dado2 = Math.floor(Math.random() * 6 ) + 1;
let sumadd = dado1 + dado2;
dadines[sumadd] = dadines[sumadd] + 1;

}

for(let i = 2; i <= 12; i++){
    console.log("El numero " , i , "salio" , dadines[i]);
}
   
}