
let numeroSecreto = 0;
let maximosIntentos = 3;
let intentos = 0;
let listaNumerosSorteados = [];


function verificarIntento(){
    console.log(numeroSecreto);
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto==numeroUsuario){
        asignarTextoElemento('p',`Acertaste, el número secreto es: ${numeroUsuario}. \nLo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);   
        document.querySelector('#intentar').setAttribute('disabled',true)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //El usuario no acierta
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p',`El número secreto es menor que ${numeroUsuario}.\nTe quedan ${maximosIntentos-intentos}`);
        } else {
            asignarTextoElemento('p',`El número secreto es mayor que ${numeroUsuario}.\n Te quedan ${maximosIntentos-intentos}`);
        }
        intentos++;
        limpiarCaja();
        if (intentos>maximosIntentos){
            asignarTextoElemento('p',`Tssss no lo lograste, suerte para la proxima.\n El numero secreto era ${numeroSecreto}`);
            document.getElementById('reiniciar').removeAttribute('disabled')
            document.querySelector('#intentar').setAttribute('disabled',true)
        }

    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function crearNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(`El numero secreto es ${numeroGenerado}`)
    return numeroGenerado;
    /*
    //Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return crearNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    }
    */
}

function condicionesInicales(){
    asignarTextoElemento('h1','¿Puedes adivinar el numero?');
    asignarTextoElemento('p','Prueba con un numero entre 1 y 10');
    document.getElementById('intentar').removeAttribute('disabled')
    document.querySelector('#reiniciar').setAttribute('disabled',true)
    numeroSecreto = crearNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar jaca
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesInicales();
    //Generar numero aleatorio

    //Desabilitar el boton reinicio de juego

    //Iniciar el numero de intentos

}

condicionesInicales();