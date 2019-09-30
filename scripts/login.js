function validaLogin(){
    let user = document.getElementById("username")
    let pass = document.getElementById("password")
    if(user.value == ''){
        user.disabled
        alert("Por favor digite seu usuário.")
    }
    if(pass.value == ''){
        pass.disabled
        alert("Por favor digite a sua senha.")
    }
}