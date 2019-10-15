function trocarDivs() {
    if (document.getElementById("loginCheck").checked) {
        document.getElementById("login").style.display = "inherit";
        document.getElementById("cadastro").style.display = "none";
    } else if (document.getElementById("cadastroCheck").checked) {
        document.getElementById("cadastro").style.display = "inherit";
        document.getElementById("login").style.display = "none";
    }
}