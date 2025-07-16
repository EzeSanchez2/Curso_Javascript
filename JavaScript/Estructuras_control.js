
numero=0
//while
while(numero < 6){
    numero ++
    document.write(numero + "<br>")
    
}

//do while
do{
    
    document.write(numero)
    numero++
}
while(numero < 6)

//break
while(numero < 20){
    numero++
    document.write(numero)
    if(numero == 10){
        //break; // Corta el circuito , cuando el numero es 10 se corta el bucle
}
}
document.write("Fin")

//for
for (let i = 20; i >= 0; i--) {
    if (i == 10) {
        continue; //se saltea el numero 
    }
    document.write(i)
    
}
//for in (Muestra el indice de donde stan los animales)
let animales=["gato","perro","leon"]
for (animal in animales) {
    document.write(animales[animal] + "<br>") //asi hago para mostrar el animal
}
document.write("<br>")

//for of 
for (animal of animales) {
    document.write(animal + "<br>")
}

//Ejercicio prueba
array1=["Maria","Eze","Iara"]
array2=["Josefina","Romina",array1]
for(array in array2){
    if(array == 2){
        for (array of array1) {
            document.write(array + "<br>")
            
        }
    }
    else{
        document.write(array2[array] + "<br>")
    }
}

