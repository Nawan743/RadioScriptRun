let cont = 0;
let formFacil = document.createElement("form");
let formMedio = document.createElement("form");
let formDificil = document.createElement("form");
let inputFacil = document.createElement("input");
let inputMedio = document.createElement("input");
let inputDificil = document.createElement("input");

function escolherNivel() {
	if (cont % 2 == 0) {
		formFacil.setAttribute("id", "jogoFacil");
		formFacil.setAttribute("action", "jogo");
		formMedio.setAttribute("id", "jogoMedio");
		formMedio.setAttribute("action", "jogo");
		formDificil.setAttribute("id", "jogoDificl");
		formDificil.setAttribute("action", "jogo");
		document.getElementsByTagName("main")[0].appendChild(formFacil);
		document.getElementsByTagName("main")[0].appendChild(formMedio);
		document.getElementsByTagName("main")[0].appendChild(formDificil);
		inputFacil.setAttribute("type", "submit");
		inputFacil.setAttribute("value", "☢️");
		inputFacil.setAttribute("id", "facil");
		inputFacil.setAttribute("name", "facil");
		inputMedio.setAttribute("type", "submit");
		inputMedio.setAttribute("value", "☢️☢️");
		inputMedio.setAttribute("id", "medio");
		inputMedio.setAttribute("name", "medio");
		inputDificil.setAttribute("type", "submit");
		inputDificil.setAttribute("value", "☢️☢️☢️");
		inputDificil.setAttribute("id", "dificil");
		inputDificil.setAttribute("name", "dificil");
		document.getElementById("jogoFacil").appendChild(inputFacil);
		document.getElementById("jogoMedio").appendChild(inputMedio);
		document.getElementById("jogoDificil").appendChild(inputDificil);
		cont++;
	}
	else{
		document.getElementById("jogo").removeChild(inputFacil);
		document.getElementById("jogo").removeChild(inputMedio);
		document.getElementById("jogo").removeChild(inputDificil);
		document.getElementsByTagName("main")[0].removeChild(form);
		cont++;
	}
}

function verRank() {
	window.location.href = "rank";
}

function logout() {
	window.location.href = "/logout";
}