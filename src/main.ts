document.write("clases y herncias con typescript, Accesos");
class Persona {
    protected nombre:string;
    protected identificacion: string;
    protected edad: number;
    protected direccion: string;
    constructor(nombre:string, idenificacion:string, edad: number, direccion: string){
        this.nombre=nombre;
        this.identificacion=idenificacion;
        this.edad=edad;
        this.direccion=direccion;
    }
    imprimir(){
        console.log("Su nombre es:" + this.nombre);
        console.log("Identificacion:" + this.identificacion);
        console.log("Edad:" + this.edad);
        console.log("direccion:" + this.direccion);
    }
}

class Docente extends Persona{
    private numeroSeguro: number;
    private titulo: string;
    //calcular el sueldo del docente sueldo basico $500+ horas extras $10      
    private sueldo:number;
    constructor(nombre:string, identificacion: string, edad: number, direccion: string, numeroSeguro:number, titulo:string, sueldo:number){
        super(nombre, identificacion, edad, direccion);
        this.numeroSeguro=numeroSeguro;
        this.titulo=titulo;
        this.sueldo= 500+10;
    }
    imprimir() {
        super.imprimir();
        console.log('Seguro:' + this.numeroSeguro);
        console.log('Titulo:' + this.titulo);
        console.log('Sueldo:' + this.sueldo);
    }
}


class Estudiante extends Persona{
    numeroMatricula: number;
    nivel:string;
    constructor(nombre:string, identificacion: string, edad: number, direccion: string, numeroMatricula: number, nivel: string){
        super(nombre, identificacion, edad, direccion);
        this.numeroMatricula = numeroMatricula;
        this.nivel=nivel;
    }
}
let persona = new Persona("Jessica", "1234", 26, "Beaterio");
let docente = new Docente('Juan', "4545", 34 ,  "Napo",575,  "Arquitecto", 510);
let estudiante = new Estudiante('Julia', "4545", 24 ,  "Recreo",123, "Tercero");
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