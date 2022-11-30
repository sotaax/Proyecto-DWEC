function FCM(){
    //Recojo los datos del formulario.
    let sexo = document.getElementById("sexo").value;
    let edad = document.getElementById("edad").value;
    let FCM;
    //Si es hombre calculo la FCM restando 225 a su edad.
    if(sexo=="mujer"){
        FCM=(225-edad);
        document.getElementById("1").innerHTML=FCM;
        //Si es hombre calculo la FCM restando 220 a su edad.
    }else if (sexo=="hombre"){
        FCM=(220-edad);
        document.getElementById("1").innerHTML=FCM;
        
    }
}