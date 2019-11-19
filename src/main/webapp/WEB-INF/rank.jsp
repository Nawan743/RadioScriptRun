<%@page import="java.util.ArrayList"%>
<%@page import="Models.Player"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ranking 🏆 - RadioScript Run</title>
<!-- Favicon -->
<link rel="shortcut icon" type="image/x-icon"
	href="./images/4305icon.ico">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Acme&display=swap"
	rel="stylesheet">
<link
	href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap"
	rel="stylesheet">

<style>
* {
	margin: 0px;
	box-sizing: content-box;
	font-family: 'Acme', sans-serif;
}

html {
	height: 100%;
}

body {
	display: flex;
	justify-content: center;
	height: 100%;
	align-items: center;
	/* box-shadow: -1px 1px 5px 3px black; */
	background-image: url("./resources/images/fundo-desktop.jpg");
	background-repeat: no-repeat;
	background-size: 101% 101%;
}

main {
	text-align: center;
	background-color: yellow;
	border-radius: 13px;
	border: 15px solid black;
	box-shadow: -1px 1px 10px 3px lightgray; //
	width: 33%;
	font-size: 1.6rem;
}

table {
	margin: auto;
}

h1 {
	margin: 0px 30px;
}

header {
	background-color: black;
	color: white;
}

#trofeu {
	color: yellow;
}

table {
	width: 100%;
}

table td {
	text-align: center;
}
</style>

</head>
<body>
	<%
		ArrayList<Player> ranking = (ArrayList<Player>) (request.getAttribute("ranking"));
	%>
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
		<header>
			<h1>
				TOP 10 Ranking <span id="trofeu">🏆</span> - RadioScript Run
			</h1>
		</header>
		<table>
			<tr>
				<th>N°</th>
				<th>Player</th>
				<th>Pontos</th>
			</tr>
			<%
			/*
			//<c:forEach items="" var="jogador">
				<tr>
					<td>${jogador.pos}</td>
					<td>${jogador.nome}</td>
					<td>${jogador.pontos}</td>
					<td>${jogador.data}</td>
				</tr>
			</c:forEach>
			*/
			for (int i = 0; i < ranking.size(); i++) { %>
				<tr>
					<td><%=(i+1)%></td>
					<td><%=ranking.get(i).getNome()%></td>
					<td><%=ranking.get(i).getRank()%></td>
				</tr>
			<% } %>
		</table>
	</main>
</body>
</html>