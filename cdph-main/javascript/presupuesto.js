$("thead").find("th").on("click", function() {
    $(this).closest("table").find("tbody").toggle();
});

function BuscarServicio() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("buscarservicio");
    filter = input.value.toUpperCase();
    table = document.getElementById("listaservicio");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}

function CalcularPrecio(){
    var estimar = 0;

    if(document.getElementById('check1').checked){
        estimar += 20000;
    }
    if(document.getElementById('check2').checked){
        estimar += 25000;
    }
    if(document.getElementById('check3').checked){
        estimar += 30000;
    }
    if(document.getElementById('check4').checked){
        estimar += 30000;
    }
    if(document.getElementById('check5').checked){
        var cost = document.getElementById('range1').value;
        cost = parseInt(cost, 10);
        estimar += cost;
    }
    if(document.getElementById('check6').checked){
        var veces = document.getElementById('cantidad1').value;
        estimar += (10000 * veces);  
    }
    if(document.getElementById('check7').checked){
        var veces = document.getElementById('cantidad2').value;
        estimar += (40000 * veces);  
    }
    if(document.getElementById('check8').checked){
        estimar += 20000; 
    }
    if(document.getElementById('check9').checked){
        var cost = document.getElementById('range2').value;
        cost = parseInt(cost, 10);
        estimar += cost;
    }
    if(document.getElementById('check10').checked){
        estimar += 170000; 
    }
    if(document.getElementById('check11').checked){
        estimar += 200000; 
    }
    if(document.getElementById('check12').checked){
        var veces = document.getElementById('cantidad3').value;
        estimar += (150000 * veces);  
    }
    if(document.getElementById('check13').checked){
        estimar += 150000; 
    }
    if(document.getElementById('check14').checked){
        estimar += 200000; 
    }
    if(document.getElementById('check15').checked){
        estimar += 230000; 
    }
    if(document.getElementById('check16').checked){
        estimar += 155000; 
    }
    if(document.getElementById('check17').checked){
        estimar += 75000; 
    }
    if(document.getElementById('check18').checked){
        estimar += 105000; 
    }
    if(document.getElementById('check19').checked){
        var cost = document.getElementById('range3').value;
        cost = parseInt(cost, 10);
        estimar += cost;
    }
    if(document.getElementById('check20').checked){
        var cost = document.getElementById('range4').value;
        cost = parseInt(cost, 10);
        estimar += cost;
    }
    if(document.getElementById('check21').checked){
        estimar += 100000; 
    }
    if(document.getElementById('check22').checked){
        var cost = document.getElementById('range5').value;
        cost = parseInt(cost, 10);
        estimar += cost;
    }
    if(document.getElementById('check23').checked){
        var veces = document.getElementById('cantidad4').value;
        estimar += (20000 * veces);  
    }
    if(document.getElementById('check24').checked){
        var veces = document.getElementById('cantidad5').value;
        estimar += (20000 * veces);  
    }
    if(document.getElementById('check25').checked){
        var cost = document.getElementById('range6').value;
        cost = parseInt(cost, 10);
        estimar += cost;
    }
    if(document.getElementById('check26').checked){
        var cost = document.getElementById('range7').value;
        cost = parseInt(cost, 10);
        estimar += cost;
    }
    if(document.getElementById('check27').checked){
        estimar += 50000; 
    }
    if(document.getElementById('check28').checked){
        estimar += 35000; 
    }
    if(document.getElementById('check29').checked){
        estimar += 300000; 
    }
    if(document.getElementById('check30').checked){
        var cost = document.getElementById('range8').value;
        cost = parseInt(cost, 10);
        estimar += cost;
    }
    if(document.getElementById('check31').checked){
        estimar += 80000; 
    }

    ShowTotal(estimar);
}

function ShowTotal(estimar){
    if(estimar === 0){
        var estim = document.getElementById("estimar");
        estim.value = '$0';
    } else {
        estimar = estimar.toLocaleString("es-CL");
        var estim = document.getElementById("estimar");
        estim.value = '$' + estimar;
    } 
}

function ReiniciarPrecio(){
    var estim = document.getElementById("estimar");
    estim.value = "";

    sessionStorage.removeItem('checkedArray');
    sessionStorage.removeItem('precio');
    sessionStorage.removeItem('estimar');

    while(document.getElementById('detalles').firstChild){
        document.getElementById('detalles').removeChild(document.getElementById('detalles').firstChild);
    }

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;

    document.getElementById("check5").checked = false;
    document.getElementById('reconstruccion').innerHTML = '<output id="amount1" name="amount1" for="range1">40.000</output>' +
    '<input type="range" id="range1" name="range1" min="35000" max="45000" value="40000" step="1000" oninput="ShowAmount()">';

    document.getElementById("check6").checked = false;
    document.getElementById("cantidad1").value = 1;

    document.getElementById("check7").checked = false;
    document.getElementById("cantidad2").value = 1;

    document.getElementById("check8").checked = false;

    document.getElementById("check9").checked = false;
    document.getElementById('provisoria').innerHTML = '<output id="amount2" name="amount2" for="range2">25.000</output>' +
    '<input type="range" id="range2" name="range2" min="20000" max="30000" value="25000" step="1000" oninput="ShowAmount()">';

    document.getElementById("check10").checked = false;
    document.getElementById("check11").checked = false;

    document.getElementById("check12").checked = false;
    document.getElementById("cantidad3").value = 1;

    document.getElementById("check13").checked = false;
    document.getElementById("check14").checked = false;
    document.getElementById("check15").checked = false;
    document.getElementById("check16").checked = false;
    document.getElementById("check17").checked = false;
    document.getElementById("check18").checked = false;

    document.getElementById("check19").checked = false;
    document.getElementById('urgencia').innerHTML = '<output id="amount3" name="amount3" for="range3">25.000</output>' +
    '<input type="range" id="range3" name="range3" min="20000" max="30000" value="25000" step="1000" oninput="ShowAmount()">';

    document.getElementById("check20").checked = false;
    document.getElementById('incisivos').innerHTML = '<output id="amount4" name="amount4" for="range4">85.000</output>' +
    '<input type="range" id="range4" name="range4" min="80000" max="90000" value="85000" step="1000" oninput="ShowAmount()">';

    document.getElementById("check21").checked = false;

    document.getElementById("check22").checked = false;
    document.getElementById('molar').innerHTML = '<output id="amount5" name="amount5" for="range5">145.000</output>' +
    '<input type="range" id="range5" name="range5" min="140000" max="150000" value="145000" step="1000" oninput="ShowAmount()"> ';

    document.getElementById("check23").checked = false;
    document.getElementById("cantidad4").value = 1;
    document.getElementById("check24").checked = false;
    document.getElementById("cantidad5").value = 1;

    document.getElementById("check25").checked = false;
    document.getElementById('exodoncia').innerHTML = '<output id="amount6" name="amount6" for="range6">30.000</output>' +
    '<input type="range" id="range6" name="range6" min="20000" max="40000" value="30000" step="1000" oninput="ShowAmount()">';

    document.getElementById("check26").checked = false;
    document.getElementById('3ermolar').innerHTML = '<output id="amount7" name="amount7" for="range7">78.000</output>' +
    '<input type="range" id="range7" name="range7" min="35000" max="120000" value="78000" step="1000" oninput="ShowAmount()">';

    document.getElementById("check27").checked = false;
    document.getElementById("check28").checked = false;
    document.getElementById("check29").checked = false;

    document.getElementById("check30").checked = false;
    document.getElementById('sobreimplante').innerHTML = '<output id="amount8" name="amount8" for="range8">225.000</output>' +
    '<input type="range" id="range8" name="range8" min="200000" max="250000" value="225000" step="1000" oninput="ShowAmount()">';

    document.getElementById("check31").checked = false;
}

function ShowAmount(){
    amount1.value = (range1.value / 1000) + '.000';
    amount2.value = (range2.value / 1000) + '.000';
    amount3.value = (range3.value / 1000) + '.000';
    amount4.value = (range4.value / 1000) + '.000';
    amount5.value = (range5.value / 1000) + '.000';
    amount6.value = (range6.value / 1000) + '.000';
    amount7.value = (range7.value / 1000) + '.000';
    amount8.value = (range8.value / 1000) + '.000';
}


function CalcularGenerar(){
    var estimar = 0;
    var checkedArray = [];
    var precio = [];

    if(document.getElementById('check1').checked){
        estimar += 20000;
        checkedArray.push("Resina Simple");
        precio.push(20000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Resina Simple</div><div class="col-sm-6"><input id="detalles1" type="text" class="form-control" placeholder="" value=""></div></div>';

    }
    if(document.getElementById('check2').checked){
        estimar += 25000;
        checkedArray.push("Resina Compuesta");
        precio.push(25000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Resina Compuesta</div><div class="col-sm-6"><input id="detalles2" type="text" class="form-control" placeholder=""></div></div>';

    }
    if(document.getElementById('check3').checked){
        estimar += 30000;
        checkedArray.push("Resina Compleja");
        precio.push(30000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Resina Compleja</div><div class="col-sm-6"><input id="detalles3" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check4').checked){
        estimar += 30000;
        checkedArray.push("Destartraje + Profilaxis");
        precio.push(30000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Destartraje + Profilaxis</div><div class="col-sm-6"><input id="detalles4" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check5').checked){
        var cost = document.getElementById('range1').value;
        cost = parseInt(cost, 10);
        estimar += cost;

        checkedArray.push("Reconstrucción en Resina");
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Reconstrucción en Resina</div><div class="col-sm-6"><input id="detalles5" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check6').checked){
        var veces = document.getElementById('cantidad1').value;
        cost = 10000 * veces;
        estimar += cost; 

        checkedArray.push("Sellante x" + veces);
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Sellante</div><div class="col-sm-6"><input id="detalles6" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check7').checked){
        var veces = document.getElementById('cantidad2').value;
        cost = 40000 * veces;
        estimar += cost;  

        checkedArray.push("Blanqueamiento x" + veces);
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Blanqueamiento</div><div class="col-sm-6"><input id="detalles7" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check8').checked){
        estimar += 20000; 

        checkedArray.push("Recementación Corona");
        precio.push(20000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Recementación Corona</div><div class="col-sm-6"><input id="detalles8" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check9').checked){
        var cost = document.getElementById('range2').value;
        cost = parseInt(cost, 10);
        estimar += cost;

        checkedArray.push("Corona Provisoria de Acrílico");
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Corona Provisoria de Acrílico</div><div class="col-sm-6"><input id="detalles9" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check10').checked){
        estimar += 170000; 

        checkedArray.push("Corona Porcelana sobre diente vital");
        precio.push(170000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Corona Porcelana sobre diente vital</div><div class="col-sm-6"><input id="detalles10" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check11').checked){
        estimar += 200000; 

        checkedArray.push("Corona Porcelana sobre muñón");
        precio.push(200000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Corona Porcelana sobre muñón</div><div class="col-sm-6"><input id="detalles11" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check12').checked){
        var veces = document.getElementById('cantidad3').value;
        cost = 150000 * veces;
        estimar += cost;  
        
        checkedArray.push("Puente fijo en póntico / vital x" + veces);
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Puente fijo en póntico / vital</div><div class="col-sm-6"><input id="detalles12" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check13').checked){
        estimar += 150000; 

        checkedArray.push("Prótesis Acrílica");
        precio.push(150000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Prótesis Acrílica</div><div class="col-sm-6"><input id="detalles13" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check14').checked){
        estimar += 200000; 

        checkedArray.push("Prótesis Metálica");
        precio.push(200000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Prótesis Metálica</div><div class="col-sm-6"><input id="detalles14" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check15').checked){
        estimar += 230000; 

        checkedArray.push("Prótesis Completa");
        precio.push(230000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Prótesis Completa</div><div class="col-sm-6"><input id="detalles15" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check16').checked){
        estimar += 155000; 

        checkedArray.push("Prótesis Unilateral");
        precio.push(155000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Prótesis Unilateral</div><div class="col-sm-6"><input id="detalles16" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check17').checked){
        estimar += 75000; 

        checkedArray.push("Prótesis Cosmética");
        precio.push(75000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Prótesis Cosmética</div><div class="col-sm-6"><input id="detalles17" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check18').checked){
        estimar += 105000; 

        checkedArray.push("Incrustación Estética o Metálica");
        precio.push(105000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Incrustación Estética o Metálica</div><div class="col-sm-6"><input id="detalles18" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check19').checked){
        var cost = document.getElementById('range3').value;
        cost = parseInt(cost, 10);
        estimar += cost;

        checkedArray.push("Urgencia");
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Urgencia</div><div class="col-sm-6"><input id="detalles19" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check20').checked){
        var cost = document.getElementById('range4').value;
        cost = parseInt(cost, 10);
        estimar += cost;

        checkedArray.push("Endodoncia Incisivos y Caninos");
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Endodoncia Incisivos y Caninos</div><div class="col-sm-6"><input id="detalles20" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check21').checked){
        estimar += 100000; 

        checkedArray.push("Endodoncia Premolar");
        precio.push(100000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Endodoncia Premolar</div><div class="col-sm-6"><input id="detalles21" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check22').checked){
        var cost = document.getElementById('range5').value;
        cost = parseInt(cost, 10);
        estimar += cost;

        checkedArray.push("Endodoncia Molar");
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Endodoncia Molar</div><div class="col-sm-6"><input id="detalles22" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check23').checked){
        var veces = document.getElementById('cantidad4').value;
        cost = 20000 * veces;
        estimar += cost;  

        checkedArray.push("Ferulización x" + veces);
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Ferulización</div><div class="col-sm-6"><input id="detalles23" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check24').checked){
        var veces = document.getElementById('cantidad5').value;
        cost = 20000 * veces;
        estimar += cost;  
        
        checkedArray.push("Pulido Radicular Periodontitis (curetaje) x" + veces);
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Pulido Radicular Periodontitis (curetaje)</div><div class="col-sm-6"><input id="detalles24" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check25').checked){
        var cost = document.getElementById('range6').value;
        cost = parseInt(cost, 10);
        estimar += cost;

        checkedArray.push("Exodoncia");
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Exodoncia</div><div class="col-sm-6"><input id="detalles25" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check26').checked){
        var cost = document.getElementById('range7').value;
        cost = parseInt(cost, 10);
        estimar += cost;

        checkedArray.push("Exodoncia 3er Molar");
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Exodoncia 3er Molar</div><div class="col-sm-6"><input id="detalles26" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check27').checked){
        estimar += 50000; 

        checkedArray.push("Carillas");
        precio.push(50000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Carillas</div><div class="col-sm-6"><input id="detalles27" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check28').checked){
        estimar += 35000; 

        checkedArray.push("Ortodoncia Controles (sin costo de instalación)");
        precio.push(35000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Ortodoncia Controles (sin costo de instalación)</div><div class="col-sm-6"><input id="detalles28" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check29').checked){
        estimar += 300000; 

        checkedArray.push("Implante Estándar");
        precio.push(300000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Implante Estándar</div><div class="col-sm-6"><input id="detalles29" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check30').checked){
        var cost = document.getElementById('range8').value;
        cost = parseInt(cost, 10);
        estimar += cost;

        checkedArray.push("Corona sobre implante");
        precio.push(cost);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Corona sobre implante</div><div class="col-sm-6"><input id="detalles30" type="text" class="form-control" placeholder=""></div></div>';
    }
    if(document.getElementById('check31').checked){
        estimar += 80000; 

        checkedArray.push("Plano relajación o contención acetato");
        precio.push(80000);

        var detalles = document.createElement('div');
        detalles.id = 'detalles';
        document.getElementById('detalles').appendChild(detalles);
        detalles.innerHTML = '<div class="row"><div class="col-sm-6">Plano relajación o contención acetato</div><div class="col-sm-6"><input id="detalles31" type="text" class="form-control" placeholder=""></div></div>';
    }

    sessionStorage.setItem("checkedArray", JSON.stringify(checkedArray));
    sessionStorage.setItem("precio", JSON.stringify(precio));
    sessionStorage.setItem("estimar", estimar = estimar.toLocaleString("es-CL"));
}

function GenerarReporte(){
    while(document.getElementById('detalles').firstChild){
        document.getElementById('detalles').removeChild(document.getElementById('detalles').firstChild);
    }
    var info = document.getElementById('info');
    info.style.display = "block"; 
    CalcularGenerar();
}

function Generar(){
    var nombre = document.getElementById('nombre').value;
    sessionStorage.setItem("nombre", nombre);
    var fono = document.getElementById('fono').value;
    sessionStorage.setItem("fono", fono);
    var dentista = document.getElementById("dentista").value;
    sessionStorage.setItem("dentista", dentista);
    var notas = document.getElementById('notas').value;
    sessionStorage.setItem("notas", notas);
    var detalles = [];

    if(document.getElementById('check1').checked){
        detalles.push(document.getElementById('detalles1').value);
    }
    if(document.getElementById('check2').checked){
        detalles.push(document.getElementById('detalles2').value);
    }
    if(document.getElementById('check3').checked){
        detalles.push(document.getElementById('detalles3').value);
    }
    if(document.getElementById('check4').checked){
        detalles.push(document.getElementById('detalles4').value);
    }
    if(document.getElementById('check5').checked){
        detalles.push(document.getElementById('detalles5').value);
    }
    if(document.getElementById('check6').checked){
        detalles.push(document.getElementById('detalles6').value);
    }

    if(document.getElementById('check7').checked){
        detalles.push(document.getElementById('detalles7').value);
    }
    if(document.getElementById('check8').checked){
        detalles.push(document.getElementById('detalles8').value);
    }
    if(document.getElementById('check9').checked){
        detalles.push(document.getElementById('detalles9').value);
    }
    if(document.getElementById('check10').checked){
        detalles.push(document.getElementById('detalles10').value);
    }
    if(document.getElementById('check11').checked){
        detalles.push(document.getElementById('detalles11').value);
    }
    if(document.getElementById('check12').checked){
        detalles.push(document.getElementById('detalles12').value);
    }
    if(document.getElementById('check13').checked){
        detalles.push(document.getElementById('detalles13').value);
    }
    if(document.getElementById('check14').checked){
        detalles.push(document.getElementById('detalles14').value);
    }
    if(document.getElementById('check15').checked){
        detalles.push(document.getElementById('detalles15').value);
    }
    if(document.getElementById('check16').checked){
        detalles.push(document.getElementById('detalles16').value);
    }
    if(document.getElementById('check17').checked){
        detalles.push(document.getElementById('detalles17').value);
    }
    if(document.getElementById('check18').checked){
        detalles.push(document.getElementById('detalles18').value);
    }
    if(document.getElementById('check19').checked){
        detalles.push(document.getElementById('detalles19').value);
    }
    if(document.getElementById('check20').checked){
        detalles.push(document.getElementById('detalles20').value);
    }
    if(document.getElementById('check21').checked){
        detalles.push(document.getElementById('detalles21').value);
    }
    if(document.getElementById('check22').checked){
        detalles.push(document.getElementById('detalles22').value);
    }
    if(document.getElementById('check23').checked){
        detalles.push(document.getElementById('detalles23').value);
    }
    if(document.getElementById('check24').checked){
        detalles.push(document.getElementById('detalles24').value);
    }
    if(document.getElementById('check25').checked){
        detalles.push(document.getElementById('detalles25').value);
    }
    if(document.getElementById('check26').checked){
        detalles.push(document.getElementById('detalles26').value);
    }
    if(document.getElementById('check27').checked){
        detalles.push(document.getElementById('detalles27').value);
    }
    if(document.getElementById('check28').checked){
        detalles.push(document.getElementById('detalles28').value);
    }
    if(document.getElementById('check29').checked){
        detalles.push(document.getElementById('detalles29').value);
    }
    if(document.getElementById('check30').checked){
        detalles.push(document.getElementById('detalles30').value);
    }
    if(document.getElementById('check31').checked){
        detalles.push(document.getElementById('detalles31').value);
    }

    sessionStorage.setItem("detalles", JSON.stringify(detalles));

    window.location.href = "../html/reporte.html";
    
}

function Cancelar(){
    var info = document.getElementById('info');
    info.style.display = "none"; 

    sessionStorage.removeItem('detalles');
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('fono');
    sessionStorage.removeItem('dentista');
    sessionStorage.removeItem('notas');

    while(document.getElementById('detalles').firstChild){
        document.getElementById('detalles').removeChild(document.getElementById('detalles').firstChild);
    }
}

function FormatTeléfono(){
    const inputField = document.getElementById("fono");
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

