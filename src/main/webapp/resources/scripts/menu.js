function menu(){
	let form = document.createElement("form");
	form.setAttribute("id", "jogo");
	form.setAttribute("action", "jogo");
	form.setAttribute("method", "POST");
	document.getElementsByTagName("main")[0].appendChild(form);
	let divJogar = document.createElement("div");
	divJogar.setAttribute("id", "jogar");
	let divRanking = document.createElement("div");
	divRanking.setAttribute("id", "visualizarRanking");
	document.getElementById("jogo").appendChild(divJogar);
	document.getElementById("jogo").appendChild(divRanking);
	let inputJogar = document.createElement("input");
	inputJogar.setAttribute("type", "submit");
	inputJogar.setAttribute("value", "▶️");
	let pJogar = document.createElement("p");
	pJogar.textContent = "Jogar";
	let inputRanking = document.createElement("input");
	inputRanking.setAttribute("type", "button");
	inputRanking.setAttribute("value", "🏆");
	inputRanking.setAttribute("onclick", "verRank()");
	let pRanking = document.createElement("p");
	pRanking.textContent = "Ranking";
	document.getElementById("jogar").appendChild(inputJogar);
	document.getElementById("jogar").appendChild(pJogar);
	document.getElementById("visualizarRanking").appendChild(inputRanking);
	document.getElementById("visualizarRanking").appendChild(pRanking);
}

function verRank() {
	window.location.href = "rank";
}