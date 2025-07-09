/*
Bloque if and Elif
nombre= "Sanchez"
if(nombre == "Ezequiel"){
    console.log("Tu nombres es "+ nombre)
}
else if(nombre == "Sanchez"){
    console.log("Tu nombre esta bien")
}
else{
    console.log("Nombre erroneo")
}
*/

dineroDeCofla=prompt("Cuanto dinero tienes Cofla?: ")
dineroDeCofla=parseInt(dineroDeCofla)

if (dineroDeCofla >= 0.6 && dineroDeCofla < 1){
     alert("Te podes comprar el Helado de agua");
     alert("Y te sobra "+ (dineroDeCofla - 0.6));

}
   
else if(dineroDeCofla >= 1 && dineroDeCofla < 1.6){
    alert("Te podes comprar el palito helado de crema")
    alert("Y te sobre " + (dineroDeCofla - 1))
}

else if(dineroDeCofla >=1.6 && dineroDeCofla < 1.7){
    alert(" Te podes comprar el bombon helado")
    alert("Y te seobre" + (dineroDeCofla- 1.6))
}
else if(dineroDeCofla >= 1.7 && dineroDeCofla < 1.8){
    alert("Te podes comprar el helado mas rico")
    alert("Te sobra" + (dineroDeCofla - 1.7))
}
else if(dineroDeCofla >=1.8 && dineroDeCofla < 2.9){
    alert("Te podes comprar el pote de helado de medio kilo")
    alert("Te sobra" + (dineroDeCofla-1.8))
}
else if(dineroDeCofla >= 2.9){
    alert("Te podes comprar kilo de helado")
    alert("Y te sobra" + (dineroDeCofla-2.9))
}
 
else{
    alert("No te podes comprar nada")
}




