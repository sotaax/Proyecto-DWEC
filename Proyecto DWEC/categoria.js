function categoria() {
    limpiar();
    //Recojo los datos del formulario.
    let año = document.getElementById("edad").value;
    //Creo una variable fecha.
    let date = new Date();
    //Consigo el año actual.
    let añoActual = date.getFullYear();
    //Consigo la edad de la persona restando el año actual a su año de nacimiento.
    let edad = añoActual - año;
    //Segun el rango de edad se pone en negrita la categoria correcta.
        if (edad < 6) {
            document.getElementById("1").innerHTML = "<Strong>Micros</Strong>";
        } else if (edad < 8) {
            document.getElementById("2").innerHTML = "<Strong>Prebenjamin</Strong>";
        } else if (edad < 10) {
            document.getElementById("3").innerHTML = "<Strong>Benjamin</Strong>";
        } else if (edad < 12) {
            document.getElementById("4").innerHTML = "<Strong>Alevin</Strong>";
        } else if (edad < 14) {
            document.getElementById("5").innerHTML = "<Strong>Infantil</Strong>";
        } else if (edad < 16) {
            document.getElementById("6").innerHTML = "<Strong>Cadete</Strong>";
        } else if (edad < 19) {
            document.getElementById("7").innerHTML = "<Strong>Juvenil</Strong>";
        } else if (edad < 40) {
            document.getElementById("8").innerHTML = "<Strong>Senior</Strong>";
        } else {
            document.getElementById("9").innerHTML = "<Strong>Veterano</Strong>";
        }
    
}

function limpiar() {
    //Pongo el texto normal.
    document.getElementById("1").innerHTML = "Micros";
    document.getElementById("2").innerHTML = "Prebenjamin</Strong>";
    document.getElementById("3").innerHTML = "Benjamin";
    document.getElementById("4").innerHTML = "Alevin";
    document.getElementById("5").innerHTML = "Infantil";
    document.getElementById("6").innerHTML = "Cadete";
    document.getElementById("7").innerHTML = "Juvenil";
    document.getElementById("8").innerHTML = "Senior";
    document.getElementById("9").innerHTML = "Veterano";
}