"use strict";
document.write("clases y herncias con typescript, Accesos");
class Persona {
    constructor(nombre, idenificacion, edad, direccion) {
        this.nombre = nombre;
        this.identificacion = idenificacion;
        this.edad = edad;
        this.direccion = direccion;
    }
    imprimir() {
        console.log("Su nombre es:" + this.nombre);
        console.log("Identificacion:" + this.identificacion);
        console.log("Edad:" + this.edad);
        console.log("direccion:" + this.direccion);
    }
}
class Docente extends Persona {
    constructor(nombre, identificacion, edad, direccion, numeroSeguro, titulo, sueldo) {
        super(nombre, identificacion, edad, direccion);
        this.numeroSeguro = numeroSeguro;
        this.titulo = titulo;
        this.sueldo = 500 + 10;
    }
    imprimir() {
        super.imprimir();
        console.log('Seguro:' + this.numeroSeguro);
        console.log('Titulo:' + this.titulo);
        console.log('Sueldo:' + this.sueldo);
    }
}
class Estudiante extends Persona {
    constructor(nombre, identificacion, edad, direccion, numeroMatricula, nivel) {
        super(nombre, identificacion, edad, direccion);
        this.numeroMatricula = numeroMatricula;
        this.nivel = nivel;
    }
}
let persona = new Persona("Jessica", "1234", 26, "Beaterio");
let docente = new Docente('Juan', "4545", 34, "Napo", 575, "Arquitecto", 510);
let estudiante = new Estudiante('Julia', "4545", 24, "Recreo", 123, "Tercero");
persona.imprimir();
docente.imprimir();
estudiante.imprimir();
/*
//document.write (docente);
console.log(docente.numeroSeguro, docente.titulo);
console.log(estudiante.numeroMatricula, estudiante.nivel);*/
//tarea 2: crar una clase padre transporte y tres subclases "aereo", "maritimo", "terrestre"
/*chasis lllantas
turvinas */ 
