window.onload = checkLoggedIn();

//Login 
function Login(){
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;

    if(usuario !== "" && contraseña !== ""){
        console.log('User: ' + usuario);
        console.log('Password: ' + contraseña);
        //http request here -> if succesful href, otherwise error
            //set logged in to true
           sessionStorage.setItem('LoggedIn', 'Si');
        window.location.href = "./html/buscarpaciente.html";
        
    //Usuario y contraseña estan vacíos
    } else if(usuario === "" && contraseña === "") {
        var error = document.getElementById("error");
            error.innerHTML = "Usuario y contraseña no pueden estar vacíos";
    //Usario esta vacío
    } else if(usuario === "" && contraseña !== ""){
        var error = document.getElementById("error");
            error.innerHTML = "Usuario no puede estar vacío";
    //Contraseña esta vacía
    } else if(usuario !== "" && contraseña === ""){
        var error = document.getElementById("error");
            error.innerHTML = "Contraseña no puede estar vacía";
    }
}

function checkLoggedIn(){
    const logged = sessionStorage.getItem('LoggedIn'); 
    if(logged === "Si"){
        window.location.href = "./html/buscarpaciente.html";
    } else {
        document.getElementsByTagName("html")[0].style.visibility = "visible";
    }
}