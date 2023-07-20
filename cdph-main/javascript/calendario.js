$(document).ready(() => {
  $(document.body).on('click', '.card[data-clickable=true]', (e) => {
    EditRemove();
  });
});

function EditRemove(){
    var modal = document.getElementById('editremove');
    modal.innerHTML = '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document">' +
    '<div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Evento</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span></button></div><div class="modal-body"><form><div class="form-group"><label for="fechaeditarevento">Fecha<span>*</span></label>' +
    '<input type="date" class="form-control" id="fechaeditarevento"></div><div class="form-group"><label for="horaeditarevento">Hora<span>*</span></label><select id="horaeditarevento" class="form-control">' +
    '<option selected disabled>Seleccione...</option><option>8:00</option><option>8:30</option><option>9:00</option><option>9:30</option><option>10:00</option><option>10:30</option>' +
    '<option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option><option>13:00</option><option>13:30</option><option>14:00</option><option>14:30</option>' +
    '<option>15:00</option><option>15:30</option><option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option></select>' +
    '</div><div class="form-group"><label for="descripcioneditar" class="col-form-label">Descripción<span>*</span></label><textarea class="form-control" id="descripcioneditar">' +
    '</textarea></div><div id="errorevento"></div><div id="successevento"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-primary" onclick="GuardarEvento()">Guardar</button>' +
    '<button type="button" class="btn btn-danger" onclick="RetirarEvento()">Retirar</button></div></div></div></div>';
}

function CancelarEvento(){
  var error = document.getElementById("errorevento");
  error.innerHTML = "";
  var success = document.getElementById("successevento");
  success.innerHTML = "";
  document.getElementById("nuevoevento").reset();
}

function AgregarEvento(){
  var error = document.getElementById("errorevento");
  error.innerHTML = "";
  var fecha = document.querySelector('#fechanuevoevento').value;
  var hora = document.getElementById('horanuevoevento').value;
  var descripcion = document.getElementById('descripcionnuevo').value;

  if(fecha === "" || hora === "Seleccione..." || descripcion === ""){
      var error = document.getElementById("errorevento");
      error.innerHTML = "No puede dejar campos vacíos";
  } else {
      var success = document.getElementById("successevento");
      success.innerHTML = "El evento a sido agregado con éxito";
  }

  console.log(fecha);
  console.log(hora);
  console.log(descripcion);
}

function GuardarEvento(){
  var error = document.getElementById("errorevento");
  error.innerHTML = "";
  var fecha = document.querySelector('#fechaeditarevento').value;
  var hora = document.getElementById('horaeditarevento').value;
  var descripcion = document.getElementById('descripcioneditar').value;

  if(fecha === "" || hora === "Seleccione..." || descripcion === ""){
      var error = document.getElementById("errorevento");
      error.innerHTML = "No puede dejar campos vacíos";
  } else {
      var success = document.getElementById("successevento");
      success.innerHTML = "El evento a sido agregado con éxito";
  }

  console.log(fecha);
  console.log(hora);
  console.log(descripcion);
}

function RetirarEvento(){
  console.log('delete event');
}

let currentWeek = 0;

function LoadWeekDays(){
  var currentDate = moment();
  var weekStart = currentDate.clone().startOf('week');

  var days = [];

  for(i = 0; i <= 6; i++){
    days.push(moment(weekStart).add(i, 'days').locale('es').format('l'));
  }

  document.getElementById('domingo').innerHTML = 'Domingo<br/>' + days[0];
  document.getElementById('lunes').innerHTML = 'Lunes<br/>' + days[1];
  document.getElementById('martes').innerHTML = 'Martes<br/>' + days[2];
  document.getElementById('miercoles').innerHTML = 'Miércoles<br/>' + days[3];
  document.getElementById('jueves').innerHTML = 'Jueves<br/>' + days[4];
  document.getElementById('viernes').innerHTML = 'Viernes<br/>' + days[5];
  document.getElementById('sabado').innerHTML = 'Sábado<br/>' + days[6];
}

function otherWeek(){ 
  //previous weeks
  if(currentWeek < 0){
    var tempWeek = currentWeek * -1;
    var prevWeek = moment().subtract(tempWeek, 'weeks').clone().startOf('week');

    var prevDays = [];
    for(i = 0; i <= 6; i++){
      prevDays.push(moment(prevWeek).add(i, 'days').locale('es').format('l'));
    }
  
    document.getElementById('domingo').innerHTML = 'Domingo<br/>' + prevDays[0];
    document.getElementById('lunes').innerHTML = 'Lunes<br/>' + prevDays[1];
    document.getElementById('martes').innerHTML = 'Martes<br/>' + prevDays[2];
    document.getElementById('miercoles').innerHTML = 'Miércoles<br/>' + prevDays[3];
    document.getElementById('jueves').innerHTML = 'Jueves<br/>' + prevDays[4];
    document.getElementById('viernes').innerHTML = 'Viernes<br/>' + prevDays[5];
    document.getElementById('sabado').innerHTML = 'Sábado<br/>' + prevDays[6];
  }
  //future weeks
  else if(currentWeek > 0){
    var nextWeek = moment().add(currentWeek, 'weeks').clone().startOf('week');
    var nextDays = [];
    
    for(i = 0; i <= 6; i++){
      nextDays.push(moment(nextWeek).add(i, 'days').locale('es').format('l'));
    }
  
    document.getElementById('domingo').innerHTML = 'Domingo<br/>' + nextDays[0];
    document.getElementById('lunes').innerHTML = 'Lunes<br/>' + nextDays[1];
    document.getElementById('martes').innerHTML = 'Martes<br/>' + nextDays[2];
    document.getElementById('miercoles').innerHTML = 'Miércoles<br/>' + nextDays[3];
    document.getElementById('jueves').innerHTML = 'Jueves<br/>' + nextDays[4];
    document.getElementById('viernes').innerHTML = 'Viernes<br/>' + nextDays[5];
    document.getElementById('sabado').innerHTML = 'Sábado<br/>' + nextDays[6];
  
  } 
  //this week
  else {
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf('week');
  
    var days = [];
  
    for(i = 0; i <= 6; i++){
      days.push(moment(weekStart).add(i, 'days').locale('es').format('l'));
    }
  
    document.getElementById('domingo').innerHTML = 'Domingo<br/>' + days[0];
    document.getElementById('lunes').innerHTML = 'Lunes<br/>' + days[1];
    document.getElementById('martes').innerHTML = 'Martes<br/>' + days[2];
    document.getElementById('miercoles').innerHTML = 'Miércoles<br/>' + days[3];
    document.getElementById('jueves').innerHTML = 'Jueves<br/>' + days[4];
    document.getElementById('viernes').innerHTML = 'Viernes<br/>' + days[5];
    document.getElementById('sabado').innerHTML = 'Sábado<br/>' + days[6];
  }
}

function prevWeek(){
  currentWeek = currentWeek - 1;
  otherWeek();
}

function nextWeek(){
  currentWeek = currentWeek + 1;
  otherWeek();
}