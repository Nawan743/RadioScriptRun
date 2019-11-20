<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ page import="java.util.ArrayList"%>
<%@ page import="Models.Player"%>

<%
	ArrayList<Player> ranking = (ArrayList<Player>) (request.getAttribute("ranking"));
%>
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


<!-- CSS -->
<link rel="stylesheet" href="./resources/estilo/rank.css" type="text/css">

</head>
<body>
	<c:import url="audio.jsp"></c:import>

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
				for (int i = 0; i < ranking.size(); i++) {
			%>
			<tr>
				<td><%=(i + 1)%></td>
				<td><%=ranking.get(i).getNome()%></td>
				<td><%=ranking.get(i).getRank()%></td>
			</tr>
			<%
				}
			%>
		</table>
	</main>
</body>
</html>