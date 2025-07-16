//concat

// let cadena="cadena de prueba"
// let cadena2=" dale"
// let resultado=cadena.concat(cadena2)
// document.write(resultado)

//startWith

// let cadena="cadena de prueba"
// let cadena2="cadena"
// let resultado=cadena.startsWith(cadena2)
// document.write(resultado)

//endWith

// let cadena1="cadena de prueba"
// let cadena2="prueba"
// let resultado=cadena1.endsWith(cadena2)
// document.write(resultado)

//includes

// let cadena1="cadena de prueba"
// let cadena2="cadena"
// let resultado=cadena1.includes(cadena2)
// document.write(resultado)

//indexOf

// let cadena1="cadena de prueba"
// let cadena2="prueba"
// let resultado=cadena1.indexOf(cadena2)
// document.write(resultado)

//lastIndexOf

// let cadena1="cadena de prueba prueba"
// let cadena2="prueba"
// let resultado= cadena1.lastIndexOf("prueba")
// document.write(resultado)

//padStart (Rellena el inicio de la cadena )

// let cadena1="abc"
// let resultado=cadena1.padStart(6,"235")
// document.write(resultado)

//padEnd (Rellena el final de la cadena)

// let cadena1="abc"
// let resultado=cadena1.padEnd(9,"99")
// document.write(resultado)

//repeat

// let cadena1=" abc"
// let resultado=cadena1.repeat(5)
// document.write(resultado)

//split

// let cadena1="hola,como,estas"
// let resultado= cadena1.split(",")
// document.write(resultado)

//substring (de donde queres que tu array comienze)

// let cadena1="ABCDE"
// let resultado=cadena1.substring(0,2) //inicio , termina
// document.write(resultado)

//ToLowerCase (minuscula)

// let cadena1= "HOLA me llamo Eze"
// let resultado= cadena1.toLowerCase(cadena1)
// document.write(resultado)

//ToUpperCase (mayuscula)

// let cadena1="hola me llamo eze"
// let resultado= cadena1.toUpperCase(cadena1)
// document.write(resultado)

//ToString

// let numero= 99
// let resultado= numero.toString()
// document.write(resultado + 5)

//trim (Elimina los espacios)

// let cadena1="  pedro   "
// let resultado=cadena1.trim()
// document.write(resultado.length)

//trimEnd (Elimina los espacios del final)

// let cadena1= "    pedro       "
// let resultado=cadena1.trimEnd()
// document.write(resultado.length)

//trimStart (Elimina los espacios del inicio)

let cadena1="                     pedro     "
let resultado=cadena1.trimStart(cadena1)
document.write(resultado.length)
