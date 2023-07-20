function EnviarNuevoPaciente(){
    var error = document.getElementById("error");
    error.innerHTML = "";

    //antecedentes personales
    var fecha = document.querySelector('input[type="date"]').value;
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
        console.log("sendingggg");
        window.location.href = "datospaciente.html";
    }
}

function Reiniciar(){
    var error = document.getElementById("error");
    error.innerHTML = "";
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


function FormatTeléfono(){
  const inputField = document.getElementById("teléfono");
  const formattedInputValue = formattPhoneNumber(inputField.value);
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


function Salir(){
    sessionStorage.removeItem('LoggedIn');
}