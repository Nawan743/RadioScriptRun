function validaLogin(){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let entrar = document.getElementById("btnEntrar");

    if(user.value == '' || pass.value == ''){
        entrar.disabled;
        alert("Usuário e/ou senha inválido.");
    }
}
