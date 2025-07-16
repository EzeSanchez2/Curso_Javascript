// ------------------------------------TRANSFORMADORES------------------------------------------------------ 

//pop (elimina el ultimo elemento del array y lo muestra)

// let nombres=["jorge","maria","ramon","pedro"]
// let resultado= nombres.pop()
// document.write(resultado)

//shift (elimina el primer elemento de un array y lo muestra)

// let nombres=["jorge","maria","ramon","pedro"]
// let resultado= nombres.shift()
// document.write(resultado)

//push (agrega un elemento al array al final de la lista)

// let nombres=["jorge","maria","ramon","pedro"]
// let resultado= nombres.push("martin","robert")
// document.write(nombres)

//reverse (invierte el orden de los elementos de un array)

// let nombres=["jorge","maria","ramon","pedro"]
// let resultado=nombres.reverse()
// document.write(resultado)

//unshift (agrega uno o mas elementos en el inicio del array y te lo muestra)

// let num=[3,4,5]
// let resultado= num.unshift(0,1,2)
// document.write(num)

//sort (ordena los elementos del array)

// let num=[1,5,7,2,3,9,4,8,6]
// let resultado=num.sort()
// document.write(resultado)

//splice (elimina un elemento cuando le indicas la posicion y empieza a eliminar cuando le indicas cuantos queres eliminar tambie  (x,y, "") el tercero es para agregar)

// let nombres=["jorge","pedro","ramon","maria","raquel"]
// let resultado= nombres.splice(1,3) // a partir de la posicion 1 inclusive elimina hasta la 3 inclusive
// document.write(nombres)

//------------------------------ACCESORES--------------------------------------------------------

//join (convierte un array a una cadena de texto y lo separa por cosas)

// let nombres=["jorge","pedro","maria","lucresia","josefina"]
// let resultado= nombres.join("<br> elementos: ") // este es el separador 
// document.write("elementos: " + resultado)

//slice (devuelve una parte de un array dentro de un array , menos el ultimo elemento)

// let nombres=["jorge","pedro","maria","lucresia"]
// let resultado= nombres.slice(0,2)
// document.write(resultado)

//--------------------REPETICION--------------------------------------

let numeros= ["jorge","pedro","maria","josefina"]
numeros.filter(
    (numero)=> {
        document.write(numero + "<br>") })

