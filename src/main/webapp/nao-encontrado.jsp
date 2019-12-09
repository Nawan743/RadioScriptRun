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
<link rel="stylesheet" href="resources/estilo/rank.css" type="text/css">
<link rel="stylesheet" href="resources/estilo/404.css" type="text/css">
</head>
<body>
	<c:import url="WEB-INF/audio.jsp"></c:import>
	<main>
		<header>
			<h1>404 - Página não encontrada!</h1>
		</header>
		<footer>
			<h3>Desculpe, a página que você está procurando não existe!</h3>
			<form action="menu">
				<button type="submit">Voltar para o menu</button>
			</form>
		</footer>
	</main>
</body>
</html>