<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RadioScript Run - Menu</title>

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="./images/4305icon.ico">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="./resources/estilo/menu.css" type="text/css">

    <!-- JavaScript -->
    <script src="./resources/scripts/index.js"></script>
</head>

<body>
    <c:import url="audio.jsp"></c:import>
    <main>
        <header>
            <h1>Bem-vindo, ${jogador.nome}!</h1>
        </header>
        <form id="jogo" action="login" method="POST">
            <abbr title="Jogar">
                <input type="submit" value="▶️">
            </abbr>
            <abbr title="Visualizar Ranking">
                <input type="button" value="🏆" onclick="verRank()">
            </abbr>
        </form>
    </main>
</body>

</html>