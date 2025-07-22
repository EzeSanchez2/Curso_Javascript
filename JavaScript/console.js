const materias= {
    fisica: [75,9,2,"fisica"],
    matematica:[95,8,2,"matematica"],
    logica: [90,6,5,"logica"]
}

const asistencia=()=>{
    for(materia in materias){
       let asistencia= materias[materia][0]
       let notas=materias[materia][1]
       let tp=materias[materia][2]

       console.log(materias[materia][3])

       if (asistencia >= 90) {
        
        console.log("%c  Asistecia perfecta ", "color: green")
        
       }
       else{
       
        console.log("%c  Falta de asistencia","color:red")
       }

       if (notas >= 7) {
            console.log("%c   promedio en orden","color:green")
        }
        else{
            console.log("%c    promedio desaprobado","color: red")
        }

        if (tp >= 3) {
            console.log("%c    trabajos en orden","color:green")
        }
        else{
            console.log("%c    trabajos no entregados","color:red")
        }
    }
}

let trabajo= "240 minutos de trabajo"
let estudio= "100 minutos de estudiov"
let tp="100 minuto hacer trabajos practicos"
let homework="30 minutos de cosas de la casa"
let descanso= "10 minutos de descanso"

console.log("TAREAS")
for (let i = 0; i < 14; i++) {
    if (i == 0) {
        console.group("Semana 1")
    }
    console.groupCollapsed("Dia " + (i+1))
    console.log(trabajo)
    console.log(descanso)
    console.log(estudio)
    console.log(tp)
    console.log(homework)
    console.groupEnd()
    if (i == 7) {
        console.groupEnd()
        console.groupCollapsed("semana 2")
        
    }
}

console.groupEnd()
console.groupEnd()

