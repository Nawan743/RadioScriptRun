// FAZ A INTERCALACAO ENTRE AS TELAS DE LOGIN E CADASTRO
function trocarDivs() {
	if (document.getElementById("loginCheck").checked) {
		document.getElementById("login").style.display = "inherit";
		document.getElementById("cadastro").style.display = "none";
	} else if (document.getElementById("cadastroCheck").checked) {
		document.getElementById("cadastro").style.display = "inherit";
		document.getElementById("login").style.display = "none";
	}
}

// FAZ VALIDACAO DE PREENCHIMENTO ANTES DE ENVIAR AO SERVIDOR
function validaLogin() {
	let user = document.getElementById("username");
	let pass = document.getElementById("password");
	let entrar = document.getElementById("btnEntrar");

	if (user.value == "" || pass.value == "") {
		if (user.value == "")
			document.querySelector('#info-login').innerHTML = 'Favor preencher o campo "Player"!';
		else
			document.querySelector('#info-login').innerHTML = 'Favor preencher o campo "Senha"!';
	} else {
		document.querySelector('#form-login').submit();
	}
}

function userIcon() {
	document.getElementById("username").style.backgroundPosition = "right";
	document.getElementById("username").style.transition = "all 0.3s";
}

function passwordIcon() {
	document.getElementById("password").style.backgroundPosition = "right";
	document.getElementById("password").style.transition = "all 0.3s";
}

function cadastro() {
	let user = document.getElementById("usernameCadastro");
	let pass = document.getElementById("passwordCadastro");
	let confirmPass = document.getElementById("confirmPassword");
	let email = document.getElementById("email");

	user.style.borderBottom = "2px solid black";
	pass.style.borderBottom = "2px solid black";
	confirmPass.style.borderBottom = "2px solid black";
	email.style.borderBottom = "2px solid black";

	// let regex = new RegExp("[A-z0-9]{6}");
	if (user.value == '' || pass.value == '' || confirmPass.value == ''
		|| user.value == pass.value || pass.value != confirmPass.value || email == '') {
		if (user.value == "") {
			document.querySelector('#info-cadastro').innerHTML = 'Favor preencher o campo "Player"!';
			user.style.borderBottom = "2px solid red";
		} else if (user.value == pass.value) {
			document.querySelector('#info-cadastro').innerHTML = 'Seu apelido não pode ser igual a sua senha!';
			user.style.borderBottom = "2px solid red";
			pass.style.borderBottom = "2px solid red";
		} else if (pass.value == "" /* && regex.test(pass) */) {
			document.querySelector('#info-cadastro').innerHTML = 'Favor preencher o campo "Senha"!';
			pass.style.borderBottom = "2px solid red";
		} else if (confirmPass.value == "") {
			document.querySelector('#info-cadastro').innerHTML = 'Favor preencher o campo "Confirmar Senha"!';
			confirmPass.style.borderBottom = "2px solid red";
		} else if (pass.value != confirmPass.value) {
			document.querySelector('#info-cadastro').innerHTML = 'O campo "Senha" não pode ser diferente do campo "Confirmar Senha"!';
			pass.style.borderBottom = "2px solid red";
			confirmPass.style.borderBottom = "2px solid red";
		} else {
			document.querySelector('#info-cadastro').innerHTML = 'Favor preencher o campo "Email"!';
			email.style.borderBottom = "2px solid red";
		}
	} else {
		localStorage.setItem('player', user.value);
		localStorage.setItem('password', pass.value);

		console.log('test')
		document.querySelector('#form-cadastro').submit();
	}
}

function buscaLocalStorage() {
	if (localStorage.getItem('player') != null && localStorage.getItem('password') != null) {
		document.querySelector('#username').value = localStorage.getItem('player');
		document.querySelector('#password').value = localStorage.getItem('password');
	}
}

function userIcon(id) {
	document.getElementById(id).style.backgroundPosition = "right";
	document.getElementById(id).style.transition = "all 0.3s";
}

function escondeUserIcon(id) {
	document.getElementById(id).style.backgroundPosition = "0px 50px";
	document.getElementById(id).style.transition = "all 0.3s";
}

function passwordIcon(id) {
	document.getElementById(id).style.backgroundPosition = "right";
	document.getElementById(id).style.transition = "all 0.3s";
}

function escondePasswordIcon(id) {
	document.getElementById(id).style.backgroundPosition = "0px 50px";
	document.getElementById(id).style.transition = "all 0.3s";
}

function emailIcon() {
	document.getElementById('email').style.backgroundPosition = "right";
	document.getElementById('email').style.transition = "all 0.3s";
}

function escondeEmailIcon() {
	document.getElementById('email').style.backgroundPosition = "0px 50px";
	document.getElementById('email').style.transition = "all 0.3s";
}

function verRank() {
	window.location.href = "rank";
}

function verificaMsgLogin(id) {
	if (document.querySelector('#'+id).innerText != "Player cadastrado com sucesso!")
		document.querySelector('#'+id).style.color = "red";
}
