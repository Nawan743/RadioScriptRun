<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>RadioScript Run - Créditos</title>

<!-- Favicon -->
<link rel="shortcut icon" type="image/x-icon"
	href="./resources/images/4305icon.ico">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Acme&display=swap"
	rel="stylesheet">
<link
	href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap"
	rel="stylesheet">

<!-- CSS -->
<link rel="stylesheet" href="./resources/estilo/creditos.css"
	type="text/css">
</head>
<body>
	<c:import url="audio.jsp"></c:import>
	<img id="logoEquipe" alt="logo-equipe" src="/resources/images/logoEquipe.png">
	<img id="logo" alt="logo-jogo" src="/resources/images/logo.png">
	<main class="col-6">
        <h3>Desenvolvedores:</h3>
        <ul>
            <li>Gledson Rodrigues de Oliveira Junior</li>
            <li>Nawan Soares Novais</li>
            <li>Wanderson Gutemberg Teotônio Silva</li>
            <li>Yure Alexandre Soares</li>
        </ul>

        <h3 class="espaco">Criador de Artes:</h3>
        <ul>
            <li>Marcos Vinicius de Oliveira</li>
        </ul>
	</main>
	<main class="col-6">
        <p>Este jogo foi desenvolvido durante o Projeto Integrador II, matéria do 2º período do curso de Tecnologia em Sistemas para Internet do IFTM, inspirado no "Chrome Dino" (ou "Jogo do
            Dinossauro"), com um tema baseado no acidente nuclear de Chernobyl, acontecido entre dia 25 e 26 de abril de 1986. 
        </p>
        <form action="/">
        	<input type="submit" value="Voltar para login" />
        </form>
	</main>
</body>
</html>