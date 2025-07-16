
//Primera manera de declarar una funcion (Agregamos return)
function saludar(){
   respuesta=prompt("Hola eze como estas? ")
   if(respuesta == "bien"){
    alert("Me alegro")
    return " La persona esta bien"
   }
   else{
    alert("Que mal")
   }
}

saludo= saludar()
document.write(saludo)

//------------------------------------------// 


//Segunda manera de declarar una funcion
saludando=function(){
   respuesta=prompt("Hola eze como estas? ")
   if(respuesta == "bien"){
    alert("Me alegro")
   }
   else{
    alert("Que mal")
   }
}

//-------------------------------------//

