//Desafio Simulador de Lucas Almada

let nota1=prompt("Ingrese nota 1")
let nota2=prompt("Ingrese nota 2")
let nota3=prompt("Ingrese nota 3")


function calcularPromedios(param1,param2,param3){
    return (param1 + param2 + param3)/3

}

function mostrarPromedio(){
    if(calcularPromedios()>6){
     alert("aprobaste")
    }
    alert("desaprobaste")

    }

mostrarPromedio()