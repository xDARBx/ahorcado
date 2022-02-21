let palabras = Array("Boca","River","Nacional","Racing","Independiente");
        let palabraOc = "";//Palabra Oculta
        let palabraAdi = "";//Palabra que va adivinando
        let vidas = 4;
        document.getElementById("boton").addEventListener("click", comprobar);


        iniciar();

        function iniciar(){
            palabraOc=palabras[Math.floor(Math.random()*palabras.length)];
            for (let i=0;i<palabraOc.length;i++){
                palabraAdi=palabraAdi+"☠ ";
            }
            document.getElementById("frase").innerHTML=palabraAdi;

        }

        function comprobar (){
            let letra = document.getElementById("letra").value.toUpperCase();
            palabraOc = palabraOc.toLocaleUpperCase();
            let nuevo = "";

            for (let i=0;i<palabraOc.length;i++){
                if (letra==palabraOc[i]){
                    nuevo = nuevo + letra + " ";
                }else{
                    nuevo = nuevo + palabraAdi[i*2] + " ";
                    }
                }
                if(nuevo==palabraAdi){
                    vidas--
                    document.getElementById("vida").innerHTML="Vidas restantes: " + vidas;

                }
                palabraAdi = nuevo;
                document.getElementById("frase").innerHTML=palabraAdi;
                
                if(vidas==0){
                    alert("PERDISTE! :(");
                }

                if(palabraAdi.search("☠")==-1){
                    alert("GANASTE!! :D")
                }

                document.getElementById("letra").value="";
                document.getElementById("letra").focus();
                dibujar();
            }
            
////mostrar letras
var entrada = document.getElementById("letra");
entrada.addEventListener('keypress',anexar);
var salida = document.getElementById("salida");

function anexar(e){
  salida.innerHTML += e.key;
}

function limpiar(e){
    entrada.value = '';
    salida.innerHTML = '';
}
 
