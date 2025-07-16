// Mostrar numeros del 1 al 20
// for(let i=0;i<= 20;i++){
//     console.log(i)
// }


// Mostrar numeros pares
// for(let i=0;i<50;i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// sumar de 1 a n
// let n=prompt("Ingrese un numero") 
// let suma=0 
// for(let i =0 ; i <= n ; i++){
//     suma+=i      
// }
// document.write(suma)

// Condicionales
// let num1=prompt("Ingrese un numero: ")
// let num2=prompt("Ingrese otro numero: ")
// if(num1 > num2){
//     document.write(`El numero ${num1} es mayor a ${num2}`)
// }
// else if(num2 > num1){
//     document.write( `El numero ${num2}  es mayor al numero ${num1}`)
// }



// let num=prompt("Ingrese un numero: ")
// if (num > 0) {
//     document.write("El numero es positivo")
// }
// else if(num < 0){
//     document.write("El numero es negativo")
// }
// else{
//     document.write("Es cero")
// }


// let edad=prompt("Ingrese su edad: ")
// if(edad >= 16){
//     document.write("Podes votar")
// }
// else{
//     document.write("Aun no podes votar")
// }

// let cant_nombre=0
// let array_nombre=[]
// while (cant_nombre < 5 ) {
//     let nombre=prompt("Decime tu nombre: ")
//     array_nombre.push(nombre)
//     cant_nombre++
// }
// document.write(array_nombre)
// document.write(`El primer nombre es ${array_nombre[0]}  y el ultimo es ${array_nombre[array_nombre.length - 1]}`)

// let numeros= parseInt(prompt("Ingrese numeros: "))
// let contador=0
// while (contador < 5) {
//     if(numeros % 2 == 0){
//         document.write("Es par <br>")
//     }
//     else{
//         document.write("Es impar <br>")
//     }

//     numeros= parseInt(prompt("Ingrese otro numeros: "))
//     contador ++
    
// }


// let edades= parseInt(prompt("Ingrese 6 edades: "))
// let contador_edades=0
// while (contador_edades < 6) {
//     if (edades > 18) {
//         document.write("Sos mayor de edad <br>")
//     }
//     else{
//         document.write("Sos menor de edad <br>")
//     }

//     edades= parseInt(prompt("Ingrese mas edades: "))
//     contador_edades ++

// }

// let nombre=prompt("Ingrese su nombre: ")
// let contador=0
// while(nombre != ""){
//     if (nombre == "juan"){
//         contador++
//     }
//     nombre= prompt("Ingrese otro nombre: ")
// }

// document.write(contador)


// const par=(num)=>{
//     if (num % 2 == 0){
//         document.write("Es par <br>")
//     }
//     else{
//         document.write("Es impar <br>")
//     }
// }

// par(5)
// par(2)
// par(4)

// function cant_letras(pal){
//     return pal.length
// }

// let palabra=prompt("Ingrese una palabra: ")
// let cantidad= cant_letras(palabra)

// document.write(cantidad)

// const numbigger=(num)=>{
//   let numero_mayor=num[0] // El primero es el mayor 
//   for (let i = 1; i < num.length; i++) { // Va iterando el array desde la segunda posicion 
//     if (num[i] > numero_mayor) { // Si en donde esta actualmente es mayor que num mayor 
//         numero_mayor=num[i] // num mayor es ese numero[i]
//     }
//  }
//  return numero_mayor
// }

// let numeros=[]
// for (let i = 0; i < 3; i++) {
//     numero=parseInt(prompt("Ingrese 3 numeros: "))
//     numeros.push(numero)
// }

// let numeroMayor=numbigger(numeros)
// document.write(`El numero mas grande es ${numeroMayor}`)

// let numero=parseInt(prompt("Ingrese un numero: "))
// for (let i = 1; i <= 10; i++) {
//      document.writeln(numero*i)
// }

// let numero_aleatorio= Math.floor(Math.random() * 10)+1
// let numero=parseInt(prompt("Ingrese un numero para adivinar: "))
// if (numero_aleatorio == numero) {
//     document.write(`Adivinaste el numero, el numero era ${numero_aleatorio}`)
// }
// else{
//     document.write(`No pudiste advinar el numero, el numero era ${numero_aleatorio}`)
// }


// let palabra=prompt("Ingrese una palabra") //Ingreso una palbra
// let vocales=["a","e","i","o","u"] // Creo la lista de vocales
// let contador_vocales=0 // contador de vocales
// for (let i = 0; i < palabra.length ; i++) { // intera los caracteres de la palabra, hasta que se acabe la longitud de la palabra
//     if (vocales.includes(palabra[i].toLocaleLowerCase())) { // si la palabra a donde esta apuntando el iterador es incluida en el array vocales
//         contador_vocales++ // contalos

//     }

// }
// document.write(contador_vocales) // imprimir el contador




// let cant_alumnos=parseInt(prompt("Cuantos alumnos hay? "))
// let lista_alumnos=[]
// for (let i= 0; i < cant_alumnos; i++) {
//     let nombre_alumnos=prompt("Ingrese el nombre del alumno: ")
//     lista_alumnos.push(nombre_alumnos)
    
//     let suma_notas= 0

//     for(let j= 0; j < 3; j++){
//         let nota= parseInt(prompt("Decime tres notas"))
//         suma_notas+= nota
//     }

//    let promedio= suma_notas/3

//     if (suma_notas >= 6) {
//         document.write(`El alumno esta aprobado : ${nombre_alumnos} y de promedio : ${promedio} `)
//     }
//     else{
//         document.write("Esta desaprobado")
//     }
// }




