function dibujar(){
    var canvas = document.getElementById('lienzo');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        //COLOR TRAZO
        ctx.strokeStyle='white';
        
        //Base ahorcado
        ctx.beginPath();
        ctx.moveTo(30,200);
        ctx.lineTo(30,10);
        ctx.lineTo(150,10)
        ctx.lineTo(150,20)
        ctx.stroke();
        
        
        if(vidas<=3){
        //cabeza
        ctx.beginPath();
        ctx.arc(150, 40, 20, 0, Math.PI * 2);
        ctx.stroke();
        }
        if(vidas<=2){
        //cuerpo
        ctx.beginPath();
        ctx.moveTo(150,60);
        ctx.lineTo(150,100);
        ctx.stroke();
        }
        if(vidas<=1){
        
        //brazo-izquierdo
        ctx.beginPath();
        ctx.moveTo(150,60);
        ctx.lineTo(130,100);
        ctx.stroke();

        //brazo-derecho
        ctx.beginPath();
        ctx.moveTo(150,60);
        ctx.lineTo(170,100);
        ctx.stroke();
        }
        if(vidas==0){
        //pierna-izquierda
        ctx.beginPath();
        ctx.moveTo(150,100);
        ctx.lineTo(130,130);
        ctx.stroke();

        //pierna-izquierda
        ctx.beginPath();
        ctx.moveTo(150,100);
        ctx.lineTo(170,130);
        ctx.stroke();
        }
    }

}
