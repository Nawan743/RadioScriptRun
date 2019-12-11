let mensagem = "";

if (pontuacao < 200) {
	mensagem = "Para jogar nos níveis \"Médio\" e \"Difícil\ você precisa completar o nível \"Fácil\"";
} else if (pontuacao < 500) {
	mensagem = "Para jogar no nível \"Difícil\ você precisa completar o nível \"Médio\"";
}

let cont = 0;
let form = document.createElement("form");
let divFacil = document.createElement("div");
let divMedio = document.createElement("div");
let divDificil = document.createElement("div");
let labelFacil = document.createElement("label");
let labelMedio = document.createElement("label");
let labelDificil = document.createElement("label");
let inputFacil = document.createElement("input");
let inputMedio = document.createElement("input");
let inputDificil = document.createElement("input");
let p = document.createElement("p");

function escolherNivel() {
	if (cont % 2 == 0) {
		form.setAttribute("id", "jogo");
		form.setAttribute("action", "jogo");
		form.setAttribute("method", "post");
		document.querySelector("#botoes").appendChild(form);
		divFacil.setAttribute("id", "levelFacil");
		divMedio.setAttribute("id", "levelMedio");
		divDificil.setAttribute("id", "levelDificil");
		document.getElementById("jogo").appendChild(divFacil);
		document.getElementById("jogo").appendChild(divMedio);
		document.getElementById("jogo").appendChild(divDificil);
		labelFacil.setAttribute("for", "facil");
		labelFacil.textContent = "Fácil";
		labelMedio.setAttribute("for", "medio");
		labelMedio.textContent = "Médio";
		labelDificil.setAttribute("for", "dificil");
		labelDificil.textContent = "Díficil";
		inputFacil.setAttribute("type", "submit");
		inputFacil.setAttribute("value", "☢️");
		inputFacil.setAttribute("id", "facil");
		inputFacil.setAttribute("onclick", "level('facil')");
		inputMedio.setAttribute("type", "submit");
		inputMedio.setAttribute("id", "medio");
		inputDificil.setAttribute("type", "submit");
		inputDificil.setAttribute("id", "dificil");
		p.setAttribute("id", "mensagem-level");
		p.textContent = mensagem;
		if(pontuacao<200){
			inputMedio.setAttribute("class", "bloqueado");
			inputMedio.removeAttribute("onclick");
			inputMedio.removeAttribute("value");
			inputMedio.removeAttribute("type");
			inputMedio.setAttribute("type", "button");
			inputMedio.setAttribute("value", "🔒🔒")
			inputDificil.setAttribute("class", "bloqueado");
			inputDificil.removeAttribute("onclick");
			inputDificil.removeAttribute("value");
			inputDificil.setAttribute("value", "🔒🔒🔒");
			inputDificil.removeAttribute("type");
			inputDificil.setAttribute("type", "button");
		}
		else if(pontuacao<500){
			inputMedio.setAttribute("value", "☢️☢️");
			inputMedio.setAttribute("onclick", "level('medio')");
			inputMedio.setAttribute("type", "submit");
			inputMedio.removeAttribute("class", "bloqueado");
			inputDificil.setAttribute("class", "bloqueado");
			inputDificil.removeAttribute("onclick");
			inputDificil.removeAttribute("value");
			inputDificil.setAttribute("value", "🔒🔒🔒")
		}
		else {
			inputDificil.setAttribute("value", "☢️☢️☢️");
			inputDificil.setAttribute("onclick", "level('dificil')");
			inputDificil.setAttribute("type", "submit");
			inputDificil.removeAttribute("class", "bloqueado");
		}
		document.getElementById("levelFacil").appendChild(inputFacil);
		document.getElementById("levelFacil").appendChild(labelFacil);
		document.getElementById("levelMedio").appendChild(inputMedio);
		document.getElementById("levelMedio").appendChild(labelMedio);
		document.getElementById("levelDificil").appendChild(inputDificil);
		document.getElementById("levelDificil").appendChild(labelDificil);
		document.getElementById("botoes").appendChild(p);
		cont++;
	}
	else{
		document.getElementById("levelFacil").removeChild(inputFacil);
		document.getElementById("levelMedio").removeChild(inputMedio);
		document.getElementById("levelDificil").removeChild(inputDificil);
		document.getElementById("levelFacil").removeChild(labelFacil);
		document.getElementById("levelMedio").removeChild(labelMedio);
		document.getElementById("levelDificil").removeChild(labelDificil);
		document.getElementById("jogo").removeChild(divFacil);
		document.getElementById("jogo").removeChild(divMedio);
		document.getElementById("jogo").removeChild(divDificil);
		document.querySelector("#botoes").removeChild(form);
		document.getElementById("botoes").removeChild(p);
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
