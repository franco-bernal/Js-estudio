"use strict";

var doc = [
    "document=dueño de todos los elementos en la página",
    "innerHTML=para modificar contenido del document",
    "existe:",
    "document.getElementById(id),",
    "document.getElementsByClassName(name),",
    "document.getElementsByTagName(name)",
    "",
    "< class='cam'>hola<>",
    "var cama=document.getElementsByClassName('cam');",
    "cama[0].innerHTML='adios';",
    "",
    "< id='cam'>hola<>",
    "var cama=document.getElementById('cam');",
    "cama.innerHTML='adios';",
    "",
    "var cama = document.getElementsByTagName('h2');",
    "for (var i in cama) {",
    "   cama[i].innerHTML = 'parece django';",
    "}",
    "",
    "",
    "enlaces",
    "'elemento.src'   para cambiar el src de algo, elegir el id o clase donde está",
    "'elemento.href' cambiar el enlace",
    "",
    "estilos(STYLE)",
    'x.style.color="6600FF"',
    'x.style.width="100px"',
    'x.style.backgroundColor="ffff"',
    "",
    "Creando elementos",
    "var p=document.createElement(p); creamos elemento p",
    "var node=document.createTextNode('hola mundo');",
    "p.appendChild(node); agregando el texto a p",
    "var div=document.getElementBy('caja') obtengo un div existente",
    "div.appendChild(p); agrego el parrafo con etiqueta al div existente",
    "",
    "Removiendo objetos",
    "var elem=document.getElementById('cam');",
    "elem.parentNode.removeChild(elem);",
    "",
    "Reemplazando elementos",
    "hay que crear antes de reemplazar",
    "var p= document.createElement('p');",
    "var node=document.createTextNode('new text');",
    "var parent=document.getElementById('demo');",
    "var child=document.getElementById('p1');",
    "parent.replaceChild(p, child);"

];

var animaciones = [
    "Animaciones",

    "< div id='container'>",
    "< div id='box' onclick='move()'>/div",
    " /div",
    "",
    "var pos = 0;",
    "var box = document.getElementById('box');",
    "function move() {",
    "pos += 1;",
    "box.style.left = pos + 'px';",
    "}",
    "setInterval(move, 1);",
    "",
    "para detener el cronometro es:",
    "clearInterval(tiempo);",
    ""

];

var eventos = [
    "Eventos",
    "onclick",
    "onload",
    "onuload",
    "onchange",
    "onmouseover",
    "onmouseout",
    "onmousedown",
    "onmouseup",
    "onblur",
    "onfocus",
    "en html:< button onclick='funcion()'>",
    "en archivo js: x.onclick=function(codigo) ",
    "",
    "notificadores:",
    "element.addEventListener(event,funcion,propagador)",
    "ej:",
    "element.addEventListener('click',myfuncion,true)",
    "remover:",
    "element.removeEventListener('click',myfuncion)",
    "<h4>propagadores:</h4>",
    "Bubbling(false): click para los p dentro de un div",
    "capturing(true):click primero afuera."
];

var imag = [
    "https://www.desconsolados.com/wp-content/uploads/2019/12/Fairy-Tail-animanga-5_330593.jpg",
    "https://www.tuplaystation.es/wp-content/uploads/2019/09/fairy-tail.jpg",
    "https://img.publimetro.pe/sites/7/2020/07/09/dinj4fe2orej5fvkhbqlnpx77i-600x338.jpg"
];


var slider = [
    
    "<button onclick='prev()'>prev</button>",
    "<img id='slider' src='https://img.publimetro.pe/sites/7/2020/07/09/dinj4fe2orej5fvkhbqlnpx77i-600x338.jpg alt='no encontrada' width='700px' height='400px'>",
    "<button onclick='next()'>next</button>",
   
    "<h3>Código usado</h3>",
    "var num = 0;",
    "function next() {",
    "   var slider = document.getElementById('slider');",
    "   num++;",
    "   if (num >= imag.length) {",
    "       num = 0;",
    "    }",
    "slider.src = imag[num];",
    "}",
    "    function prev() {",
    "    var slider = document.getElementById('slider');",
    "    num--;",
    "    if (num < 0) {",
    "        num = imag.length - 1;",
    "    }",
    "    slider.src = imag[num];",
    "}"


];


    var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if (num >= imag.length) {
        num = 0;
    }
    slider.src = imag[num];
}

function prev() {
    var slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = imag.length - 1;
    }
    slider.src = imag[num];
}

