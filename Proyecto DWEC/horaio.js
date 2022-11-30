
function horarioMañana() {
    //Declaro la variable horario.
    let horario = "";
    //Abro la etiqueta tabla y le doy un borde de 2 pixeles.
    horario += "<table border='2'>";
    //Creo la primera fila con los dias de la semana de lunes a viernes.
    horario += "<tr><th></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr>";
    //Relleno la tabla con las horas especificadas  y  las columnas vacias.
    for (let i = 9; i < 15; i++) {
        horario += "<tr>";
        horario += "<th>" + i + ":00-" + (i + 2) + ":00</th>";
        for (let j = 0; j < 5; j++) {
            horario += "<td></td>";
        }

        horario += "</tr>";
        i++;

    }
    //Cierro la etiqueta tabla.
    horario += "</table><br><br>";
    //Muestro la tabla.
    document.getElementById("horarioMañana").innerHTML = horario;

}


function horarioTarde() {
    
    //Declaro la variable horario.
    let horario = "";
    //Abro la etiqueta tabla y le doy un borde de 2 pixeles.
    horario += "<table border='2'>"; 
    //Creo la primera fila con los dias de la semana de lunes a domingo.
    horario += "<tr><th></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domingo</th></tr>";
    //Relleno la tabla con las horas especificadas  y  las columnas vacias.
    for (let i = 16; i < 21; i++) {

        horario += "<tr>";

        horario += "<th>" + i + ":00-" + (i + 1) + ":00</th>";

        for (let j = 0; j < 7; j++) {

            horario += "<td></td>";

        }

        horario += "</tr>";
    }
    //Cierro la etiqueta tabla.
    horario += "</table>";
    //Muestro la tabla.
    document.getElementById("horarioTarde").innerHTML = horario;

}

