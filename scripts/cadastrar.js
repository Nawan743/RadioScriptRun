function cadastro(){
    let usuarios = [];
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let localBase = JSON.parse(localStorage.getItem("usuarios")); 
    if(user == ""){
        alert("Digite o usuario");
    }else if(pass == ""){
        alert("Digite sua senha");
    }else if(confirmPass == ""){
        alert("Confirme sua senha");
    }else if(email == ""){
        alert("Digite seu email");
    }else if (pass != confirmPass){
        alert("As senhas nao conferem, por favor verifique!")
    }
    if(localBase != null){
        usuarios = localBase;
    }
    usuarios.push({usuario: user, senha: pass, email: email});
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

}