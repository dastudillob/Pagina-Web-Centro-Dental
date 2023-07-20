//Tabla de Pagos Diario
$(document).ready(function() {
    $('#tabladiario').DataTable( {
        "language": 
        {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sSearch":         "Buscar:",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            },
            "buttons": {
                "copy": "Copiar",
                "colvis": "Visibilidad"
            }
        }
    } );
} );

//Tabla de Pagos Mensual
$(document).ready(function() {
    $('#tablamensual').DataTable( {
        "language": 
        {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sSearch":         "Buscar:",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            },
            "buttons": {
                "copy": "Copiar",
                "colvis": "Visibilidad"
            }
        }
    } );
} );

//Tabla de Pagos Mensual
$(document).ready(function() {
    $('#tablaanual').DataTable( {
        "language": 
        {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sSearch":         "Buscar:",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            },
            "buttons": {
                "copy": "Copiar",
                "colvis": "Visibilidad"
            }
        }
    } );
} );

//diario show button
document.getElementById("diariobutton").addEventListener("click", function(){
    var mensualcard = document.getElementById('mensualcard');
    mensualcard.style.display = 'none';

    var anualcard = document.getElementById('anualcard');
    anualcard.style.display = 'none';

    var diariocard = document.getElementById('diariocard');
    diariocard.style.display = 'block';
});

//diario mostrar button
document.getElementById("mostrardiario").addEventListener("click", function(){
    var error = document.getElementById('errordiario');
    error.innerHTML = "";

    var summary = document.getElementById('summary');
    summary.style.display = 'none';

    var anual = document.getElementById('anualtable');
    anual.style.display = 'none';
    
    var mensual = document.getElementById('mensualtable');
    mensual.style.display = 'none';

    var fecha = document.getElementById("fechapagos").value;
    if(fecha === ""){
        var error = document.getElementById('errordiario');
        error.innerHTML = 'Fecha no ingresada';
    } else if(fecha.length !== 10){
        var error = document.getElementById('errordiario');
        error.innerHTML = 'Fecha no completada';
    } else {
        //call for payment history

        var title = document.getElementById('summarytitle');
        title.innerHTML = 'Sumario diario de ' + fecha;

        var diario = document.getElementById('diariotable');
        diario.style.display = 'block';

        var summary = document.getElementById('summary');
        summary.style.display = 'block';
    }

});

//diario cancel button
document.getElementById("cancelardiario").addEventListener("click", function(){
    var error = document.getElementById('errordiario');
    error.innerHTML = "";

    var summary = document.getElementById('summary');
    summary.style.display = 'none';

    var diariocard = document.getElementById('diariocard');
    diariocard.style.display = 'none';

    var diariotable = document.getElementById('diariotable');
    diariotable.style.display = 'none';

    var fecha = document.getElementById("fechapagos");
    fecha.value = "";
});

//mensual show button
document.getElementById("mensualbutton").addEventListener("click", function(){
    var diariocard = document.getElementById('diariocard');
    diariocard.style.display = 'none';

    var anualcard = document.getElementById('anualcard');
    anualcard.style.display = 'none';

    var mensualcard = document.getElementById('mensualcard');
    mensualcard.style.display = 'block';
});

//mensual mostrar button
document.getElementById("mostrarmensual").addEventListener("click", function(){
    var error = document.getElementById('errormensual');
    error.innerHTML = "";

    var summary = document.getElementById('summary');
    summary.style.display = 'none';

    var diario = document.getElementById('diariotable');
    diario.style.display = 'none';
    
    var anual = document.getElementById('anualtable');
    anual.style.display = 'none';

    var mens = document.getElementById('mens').value;
    if(mens === ""){
        var error = document.getElementById('errormensual');
        error.innerHTML = 'Fecha no ingresada';
    } else if(mens.length !== 7){
        var error = document.getElementById('errormensual');
        error.innerHTML = 'Fecha no completada';
    } else {
        //call for payment history

        var title = document.getElementById('summarytitle');
        title.innerHTML = 'Sumario Mensual de ' + mens;

        var mensual = document.getElementById('mensualtable');
        mensual.style.display = 'block';

        var summary = document.getElementById('summary');
        summary.style.display = 'block';
    }

});

//mensual cancel button
document.getElementById("cancelarmensual").addEventListener("click", function(){
    var error = document.getElementById('errormensual');
    error.innerHTML = "";

    var summary = document.getElementById('summary');
    summary.style.display = 'none';

    var mensualcard = document.getElementById('mensualcard');
   mensualcard.style.display = 'none';

   var mensualtable = document.getElementById('mensualtable');
   mensualtable.style.display = 'none';

    var mens = document.getElementById("mens");
    mens.value = "";
});

//anual show button
document.getElementById("anualbutton").addEventListener("click", function(){
    var diariocard = document.getElementById('diariocard');
    diariocard.style.display = 'none';

    var mensualcard = document.getElementById('mensualcard');
    mensualcard.style.display = 'none';

    var anualcard = document.getElementById('anualcard');
    anualcard.style.display = 'block';
});

//anual mostrar button
document.getElementById("mostraranual").addEventListener("click", function(){
    var error = document.getElementById('erroranual');
    error.innerHTML = "";

    var summary = document.getElementById('summary');
    summary.style.display = 'none';

    var diario = document.getElementById('diariotable');
    diario.style.display = 'none';

    var mensual = document.getElementById('mensualtable');
    mensual.style.display = 'none';

    var anu = document.getElementById('anu').value;
    if(anu === ""){
        var error = document.getElementById('erroranual');
        error.innerHTML = 'Fecha no ingresada';
    } else if(anu.length !== 4){
        var error = document.getElementById('erroranual');
        error.innerHTML = 'Fecha no completada';
    } else {
        //call for payment history

        var title = document.getElementById('summarytitle');
        title.innerHTML = 'Sumario Anual de ' + anu;

        var anual = document.getElementById('anualtable');
        anual.style.display = 'block';

        var summary = document.getElementById('summary');
        summary.style.display = 'block';
    }

});

//anual cancel button
document.getElementById("cancelaranual").addEventListener("click", function(){
    var error = document.getElementById('erroranual');
    error.innerHTML = "";

    var summary = document.getElementById('summary');
    summary.style.display = 'none';

    var anualcard = document.getElementById('anualcard');
    anualcard.style.display = 'none';

    var anual = document.getElementById('anualtable');
    anual.style.display = 'none';

    var anu = document.getElementById("anu");
    anu.value = "";
});

function FormatDiario(){
    const inputField = document.getElementById("fechapagos");
    const formattedInputValue = formattDiario(inputField.value);
    inputField.value = formattedInputValue;
  }
  
  function formattDiario(value) {
      if (!value) return value;
      const diarioNumber = value.replace(/[^\d]/g, "");
      const diarioLength = value.length;

      if(diarioLength < 2) return diarioNumber;
  
      if (diarioLength < 3) return diarioNumber + '-';
  
      if(diarioLength < 4) {
          return `${diarioNumber.slice(0, 2)}-${diarioNumber.slice(2,3)}`;
      }

      if(diarioLength < 5) {
        return `${diarioNumber.slice(0, 2)}-${diarioNumber.slice(2,4)}`;
    }
  
      return `${diarioNumber.slice(0, 2)}-${diarioNumber.slice(2,4)}-${diarioNumber.slice(4,8)}`;
  }

  function FormatMensual(){
    const inputField = document.getElementById("mens");
    const formattedInputValue = formattMensual(inputField.value);
    inputField.value = formattedInputValue;
  }
  
  function formattMensual(value) {
      if (!value) return value;
      const mensualNumber = value.replace(/[^\d]/g, "");
      const mensualLength = value.length;

      if(mensualLength < 2) return mensualNumber;
  
      if (mensualLength < 3) return mensualNumber + '-';

      return `${mensualNumber.slice(0, 2)}-${mensualNumber.slice(2,6)}`;
  }
  

function Salir(){
    sessionStorage.removeItem('LoggedIn');
}