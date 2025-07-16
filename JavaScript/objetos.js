// class animal{
//     constructor(especie,edad,color){  //Cosntructor
//         this.especie=especie
//         this.edad=edad
//         this.color=color
//         this.informacion=`La especie ${especie} tiene ${edad} años  y es de color ${color}`
//     }

//     verInfo(){  //metodo
//         document.write(this.informacion + "<br>")
//     }


// }

// let perro=new animal("Perro",2,"negro") //instanciamos un objeto 
// let pajaro=new animal("Pajaro",5,"azul")
// let leon=new animal("Leon",9,"amarillo")

// perro.verInfo() // invocamos el metodo 
// pajaro.verInfo()
// leon.verInfo()


//Herencia

// class Animal{
//     constructor(especie,edad,color){
//         this.especie=especie
//         this.edad=edad
//         this.color=color
//         this.informacion= `Soy ${especie} tengo ${edad} años y soy de color ${color}`
//     }

//     verInfo(){
//        document.write(this.informacion + "<br>")
//     }
// }

// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza=null
//     }
//      static ladrar(){  // como no uso los atributos de la clase puede ser estatica , no hace falta instanciar el objeto para poder hacer que ande la funcion
//         document.write("Waw <br>")
//      }
// }

// const perro= new Perro("Perro",2,"negro","ovejero")
// const gato=new Animal("gato",5,"blanco")
// Perro.ladrar()

// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza=null
//     }
//      set setModifiarRaza(tuRaza){ 
//         this.raza=tuRaza
//      }
//      get getRaza(){
//         return this.raza
//      }
// }

// const perro= new Perro("Perro",2,"blanco","ovejero")
// perro.setModifiarRaza="Doberman"
// document.write(perro.getRaza)


class Celulares{
    constructor(color,peso,resolucion_P,resolucion_C,ram){
        this.color=color
        this.peso=peso
        this.resolucion_P=resolucion_P
        this.resolucion_C=resolucion_C
        this.ram=ram
        this.encendido =false
    }

    //Metodos
     prender(){
        if (this.encendido == true) {
            document.write("Se esta prendiendo el celular")
            this.encendido=true
        }
        else{
            document.write("El celular esta apagado")
        }
    }

    reiniciar(){
        if (this.encendido == true) {
            document.write("El celular se esta reiniciando")
            
        }
        else{
            document.write("El celular se esta apagando")
        }
    }

    tomarFoto(){
        document.write(`Se esta tomando una foto con una camara de resolucion ${this.resolucion_C}`)
    }

    grabarvideo(){
        document.write(`Se esta grabando un video con una camara de resolucion ${this.resolucion_C}`)
    }

    mostrarInfo(){
        return `Color: <b>${this.color}</b><br>
                Peso:  <b>${this.peso}</b><br>
                Resolucion Pantalla: <b>${this.resolucion_P}</b><br>
                Resolucion camara: <b>${this.resolucion_C}</b><br>
                Ram: <b>${this.ram}</b><br>
        `
    }
}

class CelularAltaGama extends Celulares{
    constructor(color,peso,resolucion_P,resolucion_C,ram,rdce){
        super(color,peso,resolucion_P,resolucion_C,ram)
        this.rdce=rdce
    }

    grabarvideolento(){
        alert("Estas grabando un video en camara lenta")
    }

    reconocimientoFacial(){
        alert("vamos a iniciar con reconocimiento facil")
    }

    infoAltaGama(){
        return this.mostrarInfo() +`Resolucion camara extra: ${this.rdce}`
    }
}

class Apps{
    constructor(cantDescargas,Puntuacion,pesoA){
        this.cantDescargas=cantDescargas
        this.Puntuacion=Puntuacion
        this.pesoA=pesoA
        this.iniciada=false
        this.instalada=false
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.encendido=true
            alert("La app se esta abriendo")
        }
    }

    cerrar(){
        if (this.iniciada == true) {
            this.iniciada= false
            document.write("La aplicacion esta cerrada")
            
        }
    }

    instalar(){
        if (this.instalada == false) {
            this.instalada=true
            document.write("La aplicacion esta instalada")
        }
    }

    desinstalar(){
        if (this.instalada == true) {
            this.instalada=false
            document.write("La aplicacion se desinstalo")
            
        }
    }


}
const celular_1=new Celulares("negro",150,5,2,2)
const celular_2=new Celulares("azul",120,10,20,8)
const celular_3=new Celulares("amarillo",100,80,8,16)

document.write(`
${celular_1.mostrarInfo()}<br>
${celular_2.mostrarInfo()}<br>
${celular_3.mostrarInfo()}<br>
`);

const app= new Apps(2,9,16)
app.instalar()