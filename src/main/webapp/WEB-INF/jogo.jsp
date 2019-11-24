<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RadioScript Run</title>

    <!-- Favicon -->
	<link rel="shortcut icon" type="image/x-icon" href="./resources/images/4305icon.ico">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="./resources/estilo/jogo.css" type="text/css">
    <link rel="stylesheet" href="./resources/estilo/menu.css" type="text/css">

    <!-- JavaScript -->
    <script src="./resources/scripts/jogo.js"></script>
</head>
<body onkeypress="movimentarBoneco(), comecar()">
    <c:import url="audio.jsp"></c:import>
    <div id="caixaBlocos">
        <div class="boxBoneco" id="idBoneco"></div>
    </div>
</body>
</html>