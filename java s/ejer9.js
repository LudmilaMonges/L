function jerarquia (){

let persona1 = new estudiante ("lu" , 15 , " Femenino" );
console.log(persona1.registrar());
persona1.obtDetalles();


let persona2 =new profesor ("holaaa" , 41 , "masculino ");
console.log(persona2.asignar());
persona2.obtDetalles();

}

function Personass (){

this.nombre = nombre;
this.edad = edad;
this.genero = genero;

}


Personass.prototype.obtDetalles = function (){

console.log('nombre : ${this.nombre}, edad: ${this.edad}, género: ${this.genero');
};

function estudiante(nombre, edad, genero, curso, grupo){
    personalbar.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}

estudiante.prototype = Object.create(personalbar.prototype);
estudiante.prototype.constructor= estudiante;

estudiante.prototype.registrar=function(){
    console.log('$(this.nombre) ha sido registrado en el curso de $(this.curso), grupo')
}

