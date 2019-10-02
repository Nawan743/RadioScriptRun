function validaLogin(){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let entrar = document.getElementById("btnEntrar");

    if(user.value == '' || pass.value == ''){
        entrar.disabled;
        alert("Usuário e/ou senha inválido.");
    }
}

/*Função arrow para execucao da limpeza de campos
limpaLogin = () => user.value=""; pass.value="";*/

function limpaLogin(){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    user.value = "";
    pass.value = "";
}