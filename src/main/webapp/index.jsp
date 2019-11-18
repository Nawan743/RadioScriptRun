<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
	String infoLogin = (String) (request.getAttribute("infoLogin"));
	String infoCadastro = (String) (request.getAttribute("infoCadastro"));
	String telaExibir = (String) (request.getAttribute("telaExibir"));
%>

<!DOCTYPE html>
<html lang="pt-br">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>RadioScript Run</title>

<!-- Favicon -->
<link rel="shortcut icon" type="image/x-icon"
	href="./images/4305icon.ico">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Acme&display=swap"
	rel="stylesheet">
<link
	href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap"
	rel="stylesheet">

<!-- CSS -->
<link rel="stylesheet" href="./resources/estilo/index.css"
	type="text/css">

<!-- JavaScript -->
<script src="./resources/scripts/index.js" type="text/javascript"></script>
</head>

<body>
	<audio autoplay loop
		src="./resources/audios/City-of-the-Disturbed_Looping.mp3"
		type="audio/mpeg"></audio>
	<audio autoplay loop
		src="./resources/audios/City-of-the-Disturbed_Looping.wav"
		type="audio/wav"></audio>
	<audio autoplay loop
		src="./resources/audios/City-of-the-Disturbed_Looping.ogg"
		type="audio/ogg"></audio>
	<main>
		<div class="giroflex">
			<img src="./resources/images/sirene.gif" alt="Giroflex Gif"
				id="giroflex">
		</div>
		<div class="logo">
			<img src="./resources/images/logo.png" alt="RadioScript Run">
		</div>
		<form>
			<label for="loginCheck">Login</label> <input type="radio"
				name="login-ou-cadastro" id="loginCheck" checked
				onclick="trocarDivs()"> <label for="cadastroCheck">Cadastrar</label>
			<input type="radio" name="login-ou-cadastro" id="cadastroCheck"
				onclick="trocarDivs()">
		</form>
		<div id="login">
			<form action="/radioscriptrun/login" method="POST" class="login">
				<input type="text" name="username" class="user" id="username"
					placeholder="Player" onfocus="userIcon('username')"
					onblur="escondeUserIcon('username')"> <input
					type="password" name="password" id="password" placeholder="Senha"
					onfocus="passwordIcon('password')"
					onblur="escondePasswordIcon('password')">
				<%
					if (infoLogin != null) {
				%>
				<div class="info"><%=infoLogin%></div>
				<%
					}
				%>
				<input type="submit" value="Jogar">
				<input type="reset" value="Limpar"> <input type="button"
					value="Visualizar Ranking 🏆" onclick="verRank()">
			</form>
		</div>
		<div id="cadastro" style="display: none;">
			<form action="/radioscriptrun/cadastrar" method="POST" class="login">
				<input type="text" name="username" id="usernameCadastro"
					placeholder="Player" class="user"
					onfocus="userIcon('usernameCadastro')"
					onblur="escondeUserIcon('usernameCadastro')"> <input
					type="password" name="password" id="passwordCadastro"
					placeholder="Senha" onfocus="passwordIcon('passwordCadastro')"
					onblur="escondePasswordIcon('passwordCadastro')"> <input
					type="password" name="confirmPassword" id="confirmPassword"
					placeholder="Confirmar Senha"
					onfocus="passwordIcon('confirmPassword')"
					onblur="escondePasswordIcon('confirmPassword')"> <input
					type="email" name="email" id="email" placeholder="Email"
					onfocus="emailIcon()" onblur="escondeEmailIcon()">
				<%
					if (infoCadastro != null) {
				%>
				<div class="info"><%=infoCadastro%></div>
				<%
					}
				%>
				<input type="submit" value="Cadastrar"> <input
					type="reset" value="Limpar">
			</form>
		</div>
	</main>
	<script>
	function telaExibir(tela) {
		if (tela == "cadastro") {
			document.getElementById("loginCheck").checked = false;
			document.getElementById("cadastroCheck").checked = true;
			document.getElementById("cadastro").style.display = "inherit";
			document.getElementById("login").style.display = "none";
		}
	}
	
	<%if (telaExibir != null) {%>
		telaExibir("<%=telaExibir%>");
	<%}%>
		
	</script>
</body>

</html>