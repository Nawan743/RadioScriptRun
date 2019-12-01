<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ page import="Models.Player" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RadioScript Run - Menu</title>

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="./rescources/images/4305icon.ico">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="./resources/estilo/menu.css" type="text/css">

    <!-- JavaScript -->
    <script src="./resources/scripts/menu.js"></script>
</head>

<body>
	<% String jogador = (String) request.getAttribute("Player"); %>
    <c:import url="audio.jsp"></c:import>
    <main>
        <header>
            <h1>Bem-vindo, <%=jogador %>!</h1>
        </header>
		<script>menu()</script>
    </main>
</body>

</html>