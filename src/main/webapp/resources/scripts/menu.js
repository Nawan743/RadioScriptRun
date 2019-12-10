let cont = 0;
let form = document.createElement("form");
let inputFacil = document.createElement("input");
let inputMedio = document.createElement("input");
let inputDificil = document.createElement("input");

function escolherNivel() {
	if (cont % 2 == 0) {
		form.setAttribute("id", "jogo");
		form.setAttribute("action", "jogo");
		form.setAttribute("method", "post");
		document.querySelector("#botoes").appendChild(form);
		inputFacil.setAttribute("type", "submit");
		inputFacil.setAttribute("value", "☢️");
		inputFacil.setAttribute("id", "facil");
		inputFacil.setAttribute("onclick", "level('facil')");
		inputMedio.setAttribute("type", "submit");
		inputMedio.setAttribute("value", "☢️☢️");
		inputMedio.setAttribute("id", "medio");
		inputMedio.setAttribute("onclick", "level('medio')");
		inputDificil.setAttribute("type", "submit");
		inputDificil.setAttribute("value", "☢️☢️☢️");
		inputDificil.setAttribute("id", "dificil");
		inputDificil.setAttribute("onclick", "level('dificil')");
		document.getElementById("jogo").appendChild(inputFacil);
		document.getElementById("jogo").appendChild(inputMedio);
		document.getElementById("jogo").appendChild(inputDificil);
		cont++;
	}
	else{
		document.getElementById("jogo").removeChild(inputFacil);
		document.getElementById("jogo").removeChild(inputMedio);
		document.getElementById("jogo").removeChild(inputDificil);
		document.querySelector("#botoes").removeChild(form);
		cont++;
	}
}

function verRank() {
	window.location.href = "rank";
}

function logout() {
	window.location.href = "/logout";
}

const level = id => localStorage.setItem("level", id);
