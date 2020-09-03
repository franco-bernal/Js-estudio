{//Cuadros emergentes
    function cerrarCuadros() {
        var ven = document.getElementById("abrirC");
        ven.innerHTML = "";
        var p = document.createElement("p");
        var text = document.createTextNode("cuadros emergentes");
        p.appendChild(text);
        ven.appendChild(p);
    }
    function abrirCuadros() {
        var ven = document.getElementById("abrirC");
        ven.innerHTML = "";

        var div = document.createElement("div");
        for (let elem of cuadrosEm) {
            var p = document.createElement("p");
            var text = document.createTextNode(elem);
            p.appendChild(text);
            div.appendChild(p);
            ven.appendChild(div);
        }
    }
}


{//arreglos
    function cerrarArreglos() {
        var ven = document.getElementById("abrirA");
        ven.innerHTML = "";
        var p = document.createElement("p");
        var text = document.createTextNode("Arreglos");
        p.appendChild(text);
        ven.appendChild(p);
    }
    function abrirArreglos() {
        var ven = document.getElementById("abrirA");
        ven.innerHTML = "";

        var div = document.createElement("div");
        for (let elem of arreglos) {
            var p = document.createElement("p");
            var text = document.createTextNode(elem);
            p.appendChild(text);
            div.appendChild(p);
            ven.appendChild(div);
        }
    }
}

{//varUtiles
    function cerrarVar() {
        var ven = document.getElementById("abrirVar");
        ven.innerHTML = "";
        var p = document.createElement("p");
        var text = document.createTextNode("Algunas variables utiles");
        p.appendChild(text);
        ven.appendChild(p);
    }
    function abrirVar() {
        var ven = document.getElementById("abrirVar");
        ven.innerHTML = "";

        var div = document.createElement("div");
        for (let elem of varUtiles) {
            var p = document.createElement("p");
            var text = document.createTextNode(elem);
            p.appendChild(text);
            div.appendChild(p);
            ven.appendChild(div);
        }
    }
}

{//doc
    function cerrardoc() {
        var ven = document.getElementById("abrirdoc");
        ven.innerHTML = "";
        var p = document.createElement("p");
        var text = document.createTextNode("Document");
        p.appendChild(text);
        ven.appendChild(p);
    }
    function abrirdoc() {
        var ven = document.getElementById("abrirdoc");
        ven.innerHTML = "";

        var div = document.createElement("div");
        for (let elem of doc) {
            var p = document.createElement("p");
            var text = document.createTextNode(elem);
            p.appendChild(text);
            div.appendChild(p);
            ven.appendChild(div);
        }
    }
}

{//animaciones
    function cerraranim() {
        var ven = document.getElementById("abriranim");
        ven.innerHTML = "";
        var p = document.createElement("p");
        var text = document.createTextNode("Animaciones");
        p.appendChild(text);
        ven.appendChild(p);
    }
    function abriranim() {
        var ven = document.getElementById("abriranim");
        ven.innerHTML = "";

        var div = document.createElement("div");
        for (let elem of animaciones) {
            var p = document.createElement("p");
            var text = document.createTextNode(elem);
            p.appendChild(text);
            div.appendChild(p);
            ven.appendChild(div);
        }
    }
}

{//eventos
    function cerrareventos() {
        var ven = document.getElementById("abrireventos");
        ven.innerHTML = "";
        var p = document.createElement("p");
        var text = document.createTextNode("eventos");
        p.appendChild(text);
        ven.appendChild(p);
    }
    function abrireventos() {
        var ven = document.getElementById("abrireventos");
        ven.innerHTML = "";

        var div = document.createElement("div");
        for (let elem of eventos) {
            var p = document.createElement("p");
            var text = document.createTextNode(elem);
            p.appendChild(text);
            div.appendChild(p);
            ven.appendChild(div);
        }
    }
}

{//ecmascript
    function cerrarecmascript() {
        var ven = document.getElementById("abrirecmascript");
        ven.innerHTML = "";
        var p = document.createElement("p");
        var text = document.createTextNode("ecmascript");
        p.appendChild(text);
        ven.appendChild(p);
    }
    function abrirecmascript() {
        var ven = document.getElementById("abrirecmascript");
        ven.innerHTML = "";

        var div = document.createElement("div");
        for (let elem of ecmascript) {
            var p = document.createElement("p");
            var text = document.createTextNode(elem);
            p.appendChild(text);
            div.appendChild(p);
            ven.appendChild(div);
        }
    }
}