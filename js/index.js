//captura y guardado en array de nuevas palabrass
function capturar() {
    //console.log("capturado")
    var capturarCaja = document.getElementById("input-nueva-palabra").value;
    console.log(capturarCaja);
    
    if(capturarCaja === ''){
        alert("El campo esta vacío");
        return false;
    }    
    agregar(capturarCaja);    
}
function agregar(capturarCaja){
    palabras.push(capturarCaja);

}

var inputfocused = "";
document.getElementById("borrar-palabra").onclick = limpiar;
var elements = document.querySelectorAll("input[type='text']");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("focus", function() {
    inputfocused = this;
  });
}

function limpiar() {
  inputfocused.value = "";
}