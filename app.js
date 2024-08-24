//Codigo base.
let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemneto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemneto('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez.' : 'veces.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemneto('p', 'El numero secreto es menor.');
        } else {
            asignarTextoElemneto('p', 'El numero secreto es mayor.');
        }
        intentos ++
        limpiarCaja();
    }
    return;
} 

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemneto('h1', 'Juego del Numero Secreto.');
    asignarTextoElemneto('p', `Seleccione Un Numero del 1 al ${numeroMaximo}.`);

    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
   
    let numeroGenerado = (Math.floor(Math.random()*numeroMaximo)+1);

    console.log(numeroGenerado);
    console.log(numerosSorteados);

    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemneto('p', 'Ya jugaste todos los numeros posibles.')
    } else {
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();
//////////////////////////////////////////////////
/*Funcion Hola mundo.
function holaMundo(){
    console.log("Hola mundo");
}
holaMundo();
*/
////////////////////////////////////////////////
/*Hola nombre.
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  mostrarHolaNombre("Tayen");
*/
////////////////////////////////////////////////////////
/*Doble numero.
function numeroDoble(numero){
    console.log(numero*2);
}
numeroDoble(99);
*/
/////////////////////////////////////////////////////
/*Promedio.
function calcularPromedio (a, b, c) {
    return (a + b + c) / 3;
}
let promedio = calcularPromedio (9, 9 , 9);
console.log(promedio);
*/
//////////////////////////////////////////////
/*Mayor que.
function comparador(a ,b ){
    return a > b ? a : b ;
}
 let numeroMayor = comparador(7 , 7);
 console.log(numeroMayor);
*/
////////////////////////////////////////
/*Numero doble.
function numeroDoble(a){
    console.log(a*a);
}
let numeroUsuario = numeroDoble(10);
*/
//////////////////////////////////////////////////////
/*Indice de masa corporal.
function calcularIMC(altura, peso) {
    var imc = peso / (altura * altura);
    return imc;
  }
*/
/*Valor factorial de un num.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
*/
