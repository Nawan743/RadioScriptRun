let cont = 0;
let form = document.createElement("form");
let inputFacil = document.createElement("input");
let inputMedio = document.createElement("input");
let inputDificil = document.createElement("input");

function escolherNivel() {
	if (cont % 2 == 0) {
		form.setAttribute("id", "jogo");
		form.setAttribute("action", "jogo");
		form.setAttribute("method", "POST");
		document.getElementsByTagName("main")[0].appendChild(form);
		inputFacil.setAttribute("type", "submit");
		inputFacil.setAttribute("value", "★");
		inputFacil.setAttribute("id", "facil");
		inputMedio.setAttribute("type", "submit");
		inputMedio.setAttribute("value", "★★");
		inputMedio.setAttribute("id", "medio")
		inputDificil.setAttribute("type", "submit");
		inputDificil.setAttribute("value", "★★★");
		inputDificil.setAttribute("id", "dificil");
		document.getElementById("jogo").appendChild(inputFacil);
		document.getElementById("jogo").appendChild(inputMedio);
		document.getElementById("jogo").appendChild(inputDificil);
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