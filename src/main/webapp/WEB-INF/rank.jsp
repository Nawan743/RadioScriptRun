<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>RANK - RadioScript Run</title>

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

<style>
	.title {
		background-color: black;
		color: white;
	}
	table { margin: auto; }
</style>
</head>

<body>
	<c:import url="/WEB-INF/audio.jsp"></c:import>
	<main>
		<div class="title"><h1>TOP 10 - RadioScript Rank</h1></div>
		<table class="posicoes">
			<tr>
				<th>Pontuação</th>
				<th>Nome</th>
			</tr>
			<c:forEach var="player" items="${registros}" end="10">
				<tr>
					<td>${player.pontuacao}</td>
					<td>${player.nome} </td>
				<tr>
			</c:forEach>
		</table>
	</main>
</body>

</html>