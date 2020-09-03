var cuadrosEm = [
    "cuadro con boolean->        var c=confirm('seguro');",
    "cuadro emergente con var->  var user= prompt('ingresa un nombre');",
    "cuadro emergente ->         alert()",
    "esto escribe en el html->   document.write(x);"
]

var varUtiles = [
    "setInterval(miperroFunction,3000) <-será llamado cada 3 segundos",
    "var d=new Date(); fecha y hora actual, metodos=getFullYear(),getDay..etc"
];


function mostrarNotas() {
    mostrarNotasCuadrosEm();
    mostrarNotasArreglos();
    mostrarNotasVarUtiles();
    mostrarNotasDoc();
    mostrarNotasAnim();
    mostrarNotasEventos();
    mostrarNotasSlider();
    mostrarNotasECMAscript();
}

//---------------------------------

function mostrarNotasCuadrosEm() {
       return cuadrosEm;
}

function mostrarNotasArreglos() {
  return arreglos;
}

function mostrarNotasVarUtiles() {
    return varUtiles;
}

function mostrarNotasDoc() {
    return doc;
}


function mostrarNotasAnim() {
    return animaciones;
}

function mostrarNotasEventos() {
    return eventos;
}

function mostrarNotasSlider() {
    return slider;
}



function mostrarNotasECMAscript() {
    return ecmascript;
}