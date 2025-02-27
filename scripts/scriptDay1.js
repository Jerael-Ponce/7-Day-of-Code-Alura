// Variables de prueba
let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

// Funciones de comparación
function compararUno() {
    let resultado = (numeroUn == stringUn) 
        ? "Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes" 
        : "Las variables numeroUn y stringUn no tienen el mismo valor";
    
    document.getElementById("resultado1").innerText = resultado;
}

function compararTreinta() {
    let resultado = (numeroTreinta === stringTreinta) 
        ? "Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo" 
        : "Las variables numeroTreinta y stringTreinta no tienen el mismo tipo";
    
    document.getElementById("resultado2").innerText = resultado;
}

function compararDiez() {
    let resultado = (numeroDiez == stringDiez) 
        ? "Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes" 
        : "Las variables numeroDiez y stringDiez no tienen el mismo valor";
    
    document.getElementById("resultado3").innerText = resultado;
}
