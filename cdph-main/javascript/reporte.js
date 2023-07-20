// document.getElementById("downloadPDF").addEventListener("click", function(){
//     const element = document.getElementById("invoice");
//     html2pdf().from(element).save("CDPH_Presupuesto.pdf");
// });

document.getElementById("printFile").addEventListener("click", function(){
    window.print();
});

document.getElementById("back").addEventListener("click", function(){
    sessionStorage.removeItem('checkedArray');
    sessionStorage.removeItem('precio');
    sessionStorage.removeItem('estimar');
    window.location.href = "presupuesto.html";
});

function LoadChecked(){
    var checkedArray = JSON.parse(sessionStorage.getItem("checkedArray"));
    var detalles = JSON.parse(sessionStorage.getItem("detalles"));
    var precio = JSON.parse(sessionStorage.getItem("precio"));
    var estimar = sessionStorage.getItem("estimar");
    var nombre = sessionStorage.getItem("nombre");
    var fono = sessionStorage.getItem("fono");
    var dentista = sessionStorage.getItem("dentista");
    if(dentista === "Seleccione..."){
        dentista = "";
    }
    var notas = sessionStorage.getItem("notas");

    for (var i = checkedArray.length - 1; i >= 0; i--) {
        var table = document.getElementById("servicio");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = detalles[i];
        cell2.innerHTML = checkedArray[i];
        cell3.innerHTML = '$' + precio[i].toLocaleString("es-CL");
    }

    var servicio = document.getElementById("total");
    servicio.innerHTML = "Total: $" + estimar;

    var fecha = document.getElementById('fecha');
    let hoy = new Date().toLocaleDateString("es-CL");
    fecha.innerHTML = "<b>Fecha:</b> " + hoy;
    var data = document.getElementById("data");
    data.innerHTML = '<b>Nombre Paciente:</b> ' + nombre + '<br/>' +
    '<b>Fono: </b>' + fono +'</div><br/>' + '<b>Dr. </b>' + dentista;

    if(notas !== ""){
        var note = document.getElementById("notas");
        note.innerHTML = '<b>Notas</b>: ' + notas;
    }
}


