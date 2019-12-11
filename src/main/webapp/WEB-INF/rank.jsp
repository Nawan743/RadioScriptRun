<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ page import="java.util.ArrayList"%>
<%@ page import="Models.*"%>

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
	href="./resources/images/4305icon.ico">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Acme&display=swap"
	rel="stylesheet">
<link
	href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap"
	rel="stylesheet">

<!-- CSS -->
<link rel="stylesheet" href="./resources/estilo/rank.css"
	type="text/css">
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
			<%
				if (ranking.size() == 0) {
			%>
			<tr>
				<td colspan="3">Nenhum player cadastrado</td>
			</tr>
			<%
				} else {
			%>
			<tr>
				<th>N°</th>
				<th>Player</th>
				<th>Distância</th>
			</tr>
			<%
				int paradaRanking = (ranking.size() < 10) ? ranking.size() : 10;
					for (int i = 0; i < paradaRanking; i++) {
			%>
			<tr>
				<td><%=(i + 1)%></td>
				<td><%=ranking.get(i).getNome()%></td>
				<td><%=ranking.get(i).getRank()%></td>
			</tr>
			<%
				}
				}

				String player = (String) session.getAttribute("player");
				Integer posicao = 1;
				if (ValidaSessao.estaValidado(session)) {
					for (int i = 0; i < ranking.size(); i++) {
						if (ranking.get(i).getNome().equals(player)) {
							posicao = i;
							//System.out.println(ranking.get(i).getNome());
							//System.out.println(posicao);
						}
					}
					if (posicao >= 10) {
			%>
			<tr id="rank-player">
				<td><%=(posicao + 1)%></td>
				<td><%=ranking.get(posicao).getNome()%></td>
				<td><%=ranking.get(posicao).getRank()%></td>
			</tr>
			<%
					}
				}
			%>
		</table>
		<form action="menu">
			<button type="submit">Voltar para o menu</button>
		</form>
	</main>
</body>
</html>