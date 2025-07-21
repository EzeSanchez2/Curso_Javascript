// class calculadora{
//     constructor(){}

//     sumar(num1,num2){
//         return parseInt(num1) + parseInt(num2)
//     }

//     restar(num1,num2){
//         return parseInt(num1) - parseInt(num2)
//     }

//     multiplicar(num1,num2){
//         return parseInt(num1)*parseInt(num2)
//     }

//     dividir(num1,num2){
//         return parseInt(num1) / parseInt(num2)
//     }

//     potencia(num1,exp){
//         return parseInt(num1) ** parseInt(exp)
//     }

//     raizCuadrada(num1){
//         return Math.sqrt(num1)
//     }

//     raizCubica(num1){
//         return Math.cbrt(num1)
//     }

// }

// const calcula= new calculadora()
// alert("Ingrese la opcion que deseas: ")
// let opcion=prompt("1:Suma, 2:resta, 3:multiplicar, 4:dividir, 5:potencia, 6:Raiz Cuadrada, 7:Raiz cubica")
// if (opcion == 1) {
//     let num1=prompt("Ingresa un numero: ")
//     let num2=prompt("Ingrese otro numero: ")
//     let resultado=calcula.sumar(num1,num2)
//     document.write(`El resultado de la suma es ${resultado}`)
    
// }
// else if(opcion == 2){
//     let num1=prompt("Ingrse un numero: ")
//     let num2=prompt("Ingrese otro numero: ")
//     let resultado=calcula.restar(num1,num2)
//     document.write(`El resultado de la resta ${resultado}`)
// }
// else if(opcion == 3){
//     let num1=prompt("Ingrese un numero: ")
//     let num2=prompt("Ingrese otro numero: ")
//     let resultado=calcula.multiplicar(num1,num2)
//     document.write(`El resultado de la multiplicacion es ${resultado}`)
// }
// else if(opcion == 4){
//     let num1=prompt("Ingrese un numero: ")
//     let num2=prompt("Ingrese otro numero: ")
//     let resultado=calcula.dividir(num1,num2)
//     document.write(`El resultado de la division es ${resultado}`)

// }
// else if(opcion == 5){
//     let num1=prompt("Igrese un numero: ")
//     let exp= prompt("A que lo quiere elevar")
//     let resultado=calcula.potencia(num1,exp)
//     document.write(`El resultado de la potencia es ${resultado}`)
// }
// else if(opcion == 6){
//     let num1=prompt("Ingrese un numero: ")
//     let resultado= calcula.raizCuadrada(num1)
//     document.write(`El resultado de la raiz cuadrada ${resultado}`)
// }
// else if(opcion == 7){
//     let num1=prompt("Ingrese un numero")
//     let resultado=calcula.raizCubica(num1)
//     document.write(`El resultado de la raiz cubica es ${resultado}`)
// }
// else{
//     document.write("No se ha encontrado la operacion")
// }

const obtenerInfo= (materia) =>{
    materias={
        fisica: ["lola","josefina","maria","jose"],
        programacion:["eze","lola","jose"],
        Base_de_datos:["eze","josefina","maria","jose"],
        quimica:["eze","lola","josefina","maria","jose"]
    }

    if (materias[materia] != undefined) {
        return [materias[materia],materia]
    }
    else{
        return false
    }
}

let informacion= obtenerInfo("programacion")

if(informacion != false){
    document.write(`Alumnos en la materia ${informacion[1]}: ${informacion[0]}`)
}
