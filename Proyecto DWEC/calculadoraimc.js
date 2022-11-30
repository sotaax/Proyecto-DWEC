function variables(){
    limpiar();
    //Recojo los datos introducidos en el formulario.
    let metro=document.getElementById("metro").value;
    let peso=document.getElementById("peso").value;
    //Divido el peso entre la altura elevado a 2 para calcular el IMC.
    let IMC=parseInt(peso)/(Math.pow(parseInt(metro)/100,2));
    //Segun el IMC pongo en negrita el valor deseado.
    document.getElementById("9").innerHTML= IMC.toFixed(2);
    if(IMC<=16.99){
        document.getElementById("1").innerHTML = "<strong>16.00 Infrapeso (delgadez severa)</strong>";
    }else if(IMC<=17){
        document.getElementById("2").innerHTML = "<strong>16.00 –16.99: Infrapeso (delgadez moderada)</strong>";
    }else if(IMC<=18.49){
        document.getElementById("3").innerHTML = "<strong>17.00 -18.49: Infrapeso(delgadez aceptable)</strong>";
    }else if(IMC<=24.99){
        document.getElementById("4").innerHTML = "<strong>18.50 -24.99: Peso normal</strong>";
    }else if(IMC<=29.99){
        document.getElementById("5").innerHTML = "<strong>25.00 -29.99: Sobrepeso</strong>";
    }else if(IMC<=34.99){
        document.getElementById("6").innerHTML = "<strong>30.00 -34.99: Obeso (Tipo I)</strong>";
    }else if(IMC<=40){
        document.getElementById("7").innerHTML = "<strong>35.00 -40.00: Obeso (Tipo II)</strong>";
    }else if(IMC>40){
        document.getElementById("8").innerHTML = "<strong>40.00: Obeso (Tipo III)</strong>";
    }
    
}

function limpiar(){
        //En esta funcion vuelvo a poner normal todo el texto.
        document.getElementById("1").innerHTML = "16.00 Infrapeso (delgadez severa)";
        document.getElementById("2").innerHTML = "16.00 –16.99: Infrapeso (delgadez moderada)";
        document.getElementById("3").innerHTML = "17.00 -18.49: Infrapeso(delgadez aceptable)";
        document.getElementById("4").innerHTML = "18.50 -24.99: Peso normal";
        document.getElementById("5").innerHTML = "25.00 -29.99: Sobrepeso";
        document.getElementById("6").innerHTML = "30.00 -34.99: Obeso (Tipo I)";
        document.getElementById("7").innerHTML = "35.00 -40.00: Obeso (Tipo II)";
        document.getElementById("8").innerHTML = "40.00: Obeso (Tipo III)";
}