//Pestañas de datos, tratamiento y pago
$('#listadatos a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

//Tabla de Tratamientos
$(document).ready(function() {
    $('#tablatratamiento').DataTable( {
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

//Tabla de Pagos
$(document).ready(function() {
    $('#tablapago').DataTable( {
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

function Desactivar() {
    document.getElementById("fechapaciente").disabled = true;
    document.getElementById("rut").disabled = true;
    document.getElementById("paterno").disabled = true;
    document.getElementById("materno").disabled = true;
    document.getElementById("nombres").disabled = true;
    document.getElementById("edad").disabled = true;
    document.getElementById("dirección").disabled = true;
    document.getElementById("ciudad").disabled = true;
    document.getElementById("teléfono").disabled = true;
    document.getElementById("hospitalizadoPor").disabled = true;
    document.getElementById("alérgicoA").disabled = true;
    document.getElementById("otros").disabled = true;
    document.getElementById("cual").disabled = true;

    //Botones de radio
    document.getElementById("sexoM").disabled = true;
    document.getElementById("sexoF").disabled = true;
    document.getElementById("hospitalizadoSi").disabled = true;
    document.getElementById("hospitalizadoNo").disabled = true;
    document.getElementById("hipertensiónSi").disabled = true;
    document.getElementById("hipertensiónNo").disabled = true;
    document.getElementById("hipertensiónControlSi").disabled = true;
    document.getElementById("hipertensiónControlNo").disabled = true;
    document.getElementById("alérgicoSi").disabled = true;
    document.getElementById("alérgicoNo").disabled = true;
    document.getElementById("diabetesSi").disabled = true;
    document.getElementById("diabetesNo").disabled = true;
    document.getElementById("medicamentosSi").disabled = true;
    document.getElementById("medicamentosNo").disabled = true;
}

function Permitir(){
    //Campos vacíos
    document.getElementById("fechapaciente").disabled = false;
    document.getElementById("rut").disabled = false;
    document.getElementById("paterno").disabled = false;
    document.getElementById("materno").disabled = false;
    document.getElementById("nombres").disabled = false;
    document.getElementById("edad").disabled = false;
    document.getElementById("dirección").disabled = false;
    document.getElementById("ciudad").disabled = false;
    document.getElementById("teléfono").disabled = false;
    document.getElementById("hospitalizadoPor").disabled = false;
    document.getElementById("alérgicoA").disabled = false;
    document.getElementById("otros").disabled = false;
    document.getElementById("cual").disabled = false;

    //Botones de radio
    document.getElementById("sexoM").disabled = false;
    document.getElementById("sexoF").disabled = false;
    document.getElementById("hospitalizadoSi").disabled = false;
    document.getElementById("hospitalizadoNo").disabled = false;
    document.getElementById("hipertensiónSi").disabled = false;
    document.getElementById("hipertensiónNo").disabled = false;
    document.getElementById("hipertensiónControlSi").disabled = false;
    document.getElementById("hipertensiónControlNo").disabled = false;
    document.getElementById("alérgicoSi").disabled = false;
    document.getElementById("alérgicoNo").disabled = false;
    document.getElementById("diabetesSi").disabled = false;
    document.getElementById("diabetesNo").disabled = false;
    document.getElementById("medicamentosSi").disabled = false;
    document.getElementById("medicamentosNo").disabled = false;
}

//Habilitar editar
function Editar(){
    var success = document.getElementById("success");
    success.innerHTML = "";
    Permitir();
    document.getElementById("editar").style.display = "none";
    document.getElementById("guardar").style.display = "inline";
    document.getElementById("cancelaredicion").style.display = "inline";
}

//Guardar las ediciones
function Guardar(){
    var error = document.getElementById("error");
    error.innerHTML = "";

    //antecedentes personales
    var fecha = document.querySelector('#fechapaciente').value;
    var rut = document.getElementById("rut").value;
    var paterno = document.getElementById("paterno").value;
    var materno = document.getElementById("materno").value;
    var nombres = document.getElementById("nombres").value;
    var sexo = $(":radio[name=sexo]:checked").val();
    var edad = document.getElementById("edad").value;
    var dirección = document.getElementById("dirección").value;
    var ciudad = document.getElementById("ciudad").value;
    var teléfono = document.getElementById("teléfono").value;

    //historial médico
    var hospitalizado = $(":radio[name=hospitalizado]:checked").val();
    var hospitalizadoPor = document.getElementById("hospitalizadoPor").value;
    var hipertensión = $(":radio[name=hipertensión]:checked").val();
    var hipertensiónControl = $(":radio[name=hipertensiónControl]:checked").val();
    var alérgico = $(":radio[name=alérgico]:checked").val();
    var alérgicoA = document.getElementById("alérgicoA").value;
    var diabetes = $(":radio[name=diabetes]:checked").val();
    var otros = document.getElementById("otros").value;
    var medicamentos = $(":radio[name=medicamentos]:checked").val();
    var cual = document.getElementById("cual").value;

    console.log("fecha: " + fecha);
    console.log("rut: " + rut);
    console.log("paterno: " + paterno);
    console.log("materno: " + materno);
    console.log("nombres: " + nombres);
    console.log("sexo: " + sexo);
    console.log("edad: " + edad);
    console.log("dirección: " + dirección);
    console.log("ciudad: " + ciudad);
    console.log("teléfono: " + teléfono);
    console.log("hospitalizado: " + hospitalizado);
    console.log("hospitalizadoPor: " + hospitalizadoPor);
    console.log("hipertensión: " + hipertensión);
    console.log("hipertensiónControl: " + hipertensiónControl);
    console.log("alérgico: " + alérgico);
    console.log("alérgicoA: " + alérgicoA);
    console.log("diabetes: " + diabetes);
    console.log("otros: " + otros);
    console.log("medicamentos: " + medicamentos);
    console.log("cual: " + cual);

    //Compruebe si los campos obligatorios están vacíos
    //Campos de texto
    if(fecha === "" || rut === "" || paterno === "" || materno === "" || nombres === "" ||
        edad === "" || dirección === "" || ciudad === "" || teléfono === ""){
            var error = document.getElementById("error");
            error.innerHTML = "Asegúrese de que todos los campos obligatorios estén completados antes del envío";
    //Botones de radio
    } else if((($('input[name=sexo]:checked').length > 0) === false) || (($('input[name=hospitalizado]:checked').length > 0) == false) || (($('input[name=hipertensión]:checked').length > 0) === false)||
        (($('input[name=alérgico]:checked').length > 0) === false)|| (($('input[name=diabetes]:checked').length > 0) === false) || (($('input[name=medicamentos]:checked').length > 0) === false)){
            var error = document.getElementById("error");
            error.innerHTML = "Asegúrese de que todos los campos obligatorios estén completados antes del envío";
    //todo lleno request http
    } else {
        var success = document.getElementById("success");
        success.innerHTML = "Los cambios han sido guardados";
        document.getElementById("editar").style.display = "block";
        document.getElementById("cancelaredicion").style.display = "none";
        document.getElementById("guardar").style.display = "none";
        Desactivar();
        console.log("sendingggg");
        

    }
}

function CancelarEdicion(){
    var error = document.getElementById("error");
    error.innerHTML = "";
    document.getElementById("editar").style.display = "block";
    document.getElementById("cancelaredicion").style.display = "none";
    document.getElementById("guardar").style.display = "none";
    Desactivar();
}

function AgregarTratamiento(){
    var error = document.getElementById("errortratamiento");
    error.innerHTML = "";
    var fecha = document.querySelector('#fechatratamiento').value;
    var dentista = document.getElementById('dentista').value;
    var motivo = document.getElementById('motivo').value;

    if(fecha === "" || dentista === "Seleccione..." || motivo === ""){
        var error = document.getElementById("errortratamiento");
        error.innerHTML = "No puede dejar campos vacíos";
    } else {
        var success = document.getElementById("successtratamiento");
        success.innerHTML = "El tratamiento a sido agregado con éxito";
    }

    console.log(fecha);
    console.log(dentista);
    console.log(motivo);
}

function CancelarTratamiento(){
    var error = document.getElementById("errortratamiento");
    error.innerHTML = "";
    var success = document.getElementById("successtratamiento");
    success.innerHTML = "";
    document.getElementById("nuevotratamiento").reset();
}

function AgregarPago(){
    var error = document.getElementById("errorpago");
    error.innerHTML = "";
    var fecha = document.querySelector('#fechapago').value;
    var monto = document.getElementById('monto').value;
    var forma = document.getElementById('forma').value;
    var estado = document.getElementById('estado').value;
    var observaciones = document.getElementById('observaciones').value;

    if(fecha === "" || monto === "" || forma === "Seleccione..." || estado === "Seleccione..."){
        var error = document.getElementById("errorpago");
        error.innerHTML = "No puede dejar campos vacíos";
    } else {
        var success = document.getElementById("successpago");
        success.innerHTML = "El pago a sido agregado con éxito";
    }

    console.log(fecha);
    console.log(monto);
    console.log(forma);
    console.log(estado);
    console.log(observaciones);
}

function CancelarPago(){
    var error = document.getElementById("errorpago");
    error.innerHTML = "";
    var success = document.getElementById("successpago");
    success.innerHTML = "";
    document.getElementById("nuevopago").reset();
}

function FormatTeléfono(){
    // grab the value of what the user is typing into the input
  const inputField = document.getElementById("teléfono");

  // next, we're going to format this input with the `formattPhoneNumber` function, which we'll write next.
  const formattedInputValue = formattPhoneNumber(inputField.value);

  // Then we'll set the value of the inputField to the formattedValue we generated with the formattPhoneNumber
  inputField.value = formattedInputValue;
}

function formattPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 3) return '+' + phoneNumber;

    if(phoneNumberLength < 4) {
        return `+${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2,3)}`;
    }
    
    return `+${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2,3)} ${phoneNumber.slice(3,11)}`;
}

function FormatRUT(){
    const inputField = document.getElementById("rut");
    const formattedInputValue = formattRUT(inputField.value);
    inputField.value = formattedInputValue;
}

function formattRUT(value){
    if (!value) return value;
    const rutNumber = value.replace(/[^\w]/g, "");
    const rutNumberLength = rutNumber.length;

   if(rutNumberLength < 2) return rutNumber;

   if(rutNumberLength < 5){
    return `${rutNumber.slice(0,1)}.${rutNumber.slice(1,4)}`;
   }

   if(rutNumberLength < 8){
    return `${rutNumber.slice(0, 1)}.${rutNumber.slice(1,4)}.${rutNumber.slice(4,7)}`;
   }

   if(rutNumberLength < 9) {
    return `${rutNumber.slice(0, 1)}.${rutNumber.slice(1,4)}.${rutNumber.slice(4,7)}-${rutNumber.slice(7,8)}`;
   }

   return `${rutNumber.slice(0, 2)}.${rutNumber.slice(2,5)}.${rutNumber.slice(5,8)}-${rutNumber.slice(8,9)}`;   
}

$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});


function formatNumber(n) {
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function formatCurrency(input) {
    var input_val = input.val();

    if (input_val === "") { return; }

    var original_len = input_val.length;

    var caret_pos = input.prop("selectionStart");

    input_val = formatNumber(input_val);
    input_val = "$" + input_val;

    input.val(input_val);

    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
}

function Salir(){
    sessionStorage.removeItem('LoggedIn');
}