const h1 = document.querySelector('h1');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btn1 = document.querySelector('#btnCalcular');
const p = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarinputValues)

function sumarinputValues(evento) {
    evento.preventDefault();
    let sumainput = input1.value + input2.value;
    p.innerText = "Resultado: " + sumainput;
}

/*
function btnOnclick() {
    let sumainput = input1.value + input2.value;
    p.innerText = "Resultado: " + sumainput;
}
*/
/*
function btnOnClick(params){
    console.log('ME DISTE CLICK!? D:<')
}
/**
/*
< Con la función querySelector voy a seleccionar del HTML el H1
< Se representan lo seleccionado y colocado en las constantes
/**
/*
MÉTODOS DE SALIDA 1
console.log (h1);
console.log (p);
console.log (parrafo);
console.log (pid);
console.log (input);
MÉTODOS DE SALIDA 2
console.log (h1, p, parrafo, pid, input);
/** */
/*
const h1 = document.querySelector ('h1');
const p = document.querySelector ('p');
const parrafo = document.querySelector ('.parrafo');
const pid = document.querySelector ('#pid');
const input = document.querySelector ('input');
*/
/*console.log ({
    h1,
    p,
    parrafo,
    pid,
    input
})*/
/*
console.log(input.value);
*/
/*
MÉTODO USADO PARA MODIFICAR UN HTML A TRAVÉS DE JAVASCRIPT
**/
/*h1.innerHTML = "Instituto Superio Tecnológico <br> Japón";
console.log(h1.getAttribute);*/
