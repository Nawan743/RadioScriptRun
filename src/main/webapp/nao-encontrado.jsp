<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Página não encontrada! - RadioScript Run</title>
<!-- Favicon -->
<link rel="shortcut icon" type="image/x-icon"
	href="rescources/images/4305icon.ico">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Acme&display=swap"
	rel="stylesheet">
<link
	href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap"
	rel="stylesheet">

<!-- CSS -->
<link rel="stylesheet" href="resources/estilo/menu.css" type="text/css">
<link rel="stylesheet" href="resources/estilo/rank.css"
	type="text/css">
<style>
h3 {
	margin-top: 400px;
	color: white;
	text-shadow: 1px 1px 2px black;
}
</style>
</head>
<body>
	<c:import url="WEB-INF/audio.jsp"></c:import>
	<main>
		<header>
			<h1>404 - Página não encontrada!</h1>
		</header>
		<h3>Desculpe, a página que você está procurando não existe!</h3>
		<form action="menu">
			<button type="submit">Voltar para o menu</button>
		</form>
	</main>
</body>
</html>