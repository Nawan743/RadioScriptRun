function cadastro(){
    let usuarios = [];
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let confirmPass = document.getElementById("confirmPassword");
    let email = document.getElementById("email");
    let localBase = JSON.parse(localStorage.getItem("usuarios")); 

    user.style.borderBottom = "2px solid black";
    pass.style.borderBottom = "2px solid black";
    confirmPass.style.borderBottom = "2px solid black";
    email.style.borderBottom = "2px solid black";
    
    // let regex = new RegExp("[A-z0-9]{6}");
    if(user.value == ""){
        alert("Digite o usuario");
        user.style.borderBottom = "2px solid red";
    }else if(pass.value == "" /*&& regex.test(pass)*/){
        alert("Digite sua senha");
        pass.style.borderBottom = "2px solid red";
    }else if(confirmPass.value == ""){
        alert("Confirme sua senha");
        confirmPass.style.borderBottom = "2px solid red";
    }else if(email.value == ""){
        alert("Digite seu email");  
        email.style.borderBottom = "2px solid red";
    }else if (pass.value != confirmPass.value){
        alert("As senhas nao conferem, por favor verifique!");
        pass.style.borderBottom = "2px solid red";
        confirmPass.style.borderBottom = "2px solid red";

    }else {
    if(localBase != null){
        usuarios = localBase;
    }
    usuarios.push({usuario: user.value, senha: pass.value, email: email.value});
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.href='login.html';
    }

}