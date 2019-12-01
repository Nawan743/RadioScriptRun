// ---------------- Movimento do personagem -------------------------
let primeiraTecla = true;
let runOn = true;
let jumpOn = false;

function running() {
	runOn = true;
    jumpOn = false;
	document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/correndo.gif')";
    document.getElementById('idBoneco').style.marginTop = "230px";
}

function turnedDown() {
	document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/agaixado.gif')";
    document.getElementById('idBoneco').style.marginTop = "230px";
}

function jumped() {
    document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/pulando.png')";
    document.getElementById('idBoneco').style.marginTop = "50px";
    setTimeout(running, 900);
}




// --------------- Controta os obstáculos ---------------------------
const g_obstaculos = [
	{src: 'passaro.webp', position: 'top'},
	//{src: 'passaro.png', position: 'middle'},
	{src: 'monstro.gif', position: 'down'}
];
const g_cronometros = [1,2,3,4,5,6,7,8,9,10];

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Orquestra as outras funcoes do jogo: cria um novo bloco a cada intervalo
// aleatorio que pode variar de 1 a 4 segundos
// Parâmetros: indiceBloco: inicialmente igual a zero. É incrementado até 10
// (nro max. de blocos na tela) até 10, depois retorna a zero novamente
// Retorno: nenhum
// Exemplo de chamada da função: main(0)
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
function main(indiceBloco = 0) {
    criarNovoBloco(indiceBloco);
    setTimeout(main,sortearNro(1,4)*1000,(indiceBloco>9)?0:indiceBloco+1);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Sortear um numero aleatorio no intervalo [a,b]
//Parâmetros: a: limite inferior do intervalo e b: limite superior do intervalo
//Retorno: número aleatório sorteado
//Exemplo de chamada da função: sortear(5,45) -> 30
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function sortearNro(a,b) {
 return Math.round(Math.random()*(b-a))+a;
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Cria um novo bloco dinamicamente e adiciona-o na interface (nro max. de
// blocos por tela: 10)
// Parâmetros: indiceBloco: inicialmente igual a zero. É incrementado até 10
// (nro max. de blocos na tela)
// Retorno: nenhum
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
function criarNovoBloco(indiceBloco) {
    let idNovoBloco, cssNovoBloco, novoBloco, leftNovoBloco, caixaBlocos, larguracaixaBlocos, novoParagrafo;
    let larguraBloco = 60;
    let alturaBloco = 60;

    // Acessa a caixa de blocos onde os blocos irão movimentar
    caixaBlocos = window.getComputedStyle(document.getElementById("caixaBlocos"));
    larguracaixaBlocos = caixaBlocos.width;

    // Cria um novo bloco para ser inserido na caixa de blocos
    idNovoBloco = "bloco"+indiceBloco;
    console.log(idNovoBloco);
    novoBloco = document.createElement("div");
    novoBloco.setAttribute("id",idNovoBloco);
    novoBloco.setAttribute("class","novoBloco");
    const numSort = sortearNro(0,1);
    if (g_obstaculos[numSort].position == 'top') {
    	cssNovoBloco = `margin-top: 70px; left:+${parseInt(larguracaixaBlocos)-larguraBloco}px; width:${larguraBloco}px; height:${alturaBloco}px; z-index:${indiceBloco}; background-image:url(./resources/images/${g_obstaculos[numSort].src}); background-size: 100%;`;
    } else if (g_obstaculos[numSort].position == 'middle') {
    	cssNovoBloco = `margin-top: 170px; left:+${parseInt(larguracaixaBlocos)-larguraBloco}px; width:${larguraBloco}px; height:${alturaBloco}px; z-index:${indiceBloco}; background-image:url(./resources/images/${g_obstaculos[numSort].src}); background-size: 100%;`;
    } else {
    	cssNovoBloco = `margin-top: 270px; left:+${parseInt(larguracaixaBlocos)-larguraBloco}px; width:${larguraBloco}px; height:${alturaBloco}px; z-index:${indiceBloco}; background-image:url(./resources/images/${g_obstaculos[numSort].src}); background-size: 100%;`;    	
    }
    novoBloco.setAttribute("style",cssNovoBloco);
    document.getElementById("caixaBlocos").appendChild(novoBloco);
    
    // Cria o texto que ira dentro do novo bloco
    novoParagrafo = document.createElement("p");
    novoParagrafo.setAttribute("style","color:white; text-align:center;");
    document.getElementById(idNovoBloco).appendChild(novoParagrafo);
    g_cronometros[indiceBloco] = setInterval(movimentarBloco,1,idNovoBloco,indiceBloco);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Controle para movimentar cada bloco individualmente na interface da direita
// ate à esquerda da caixa de blocos
// Parâmetros: indiceBloco: inicialmente igual a zero. É incrementado até 10
// (nro max. de blocos na tela)
// Retorno: nenhum
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
function movimentarBloco(idBloco,indiceBloco) {
    var bloco, posicaoBloco;
    bloco = window.getComputedStyle(document.getElementById(idBloco));
    posicaoBloco = (parseInt(bloco.left)-1);
    document.getElementById(idBloco).style.left = posicaoBloco+"px";
    let url = window.location.href;
    let pasta = window.location.pathname;
    // Testa detecção de colisão no if
    if(detectarColisao("idBoneco", idBloco)){
    	clearInterval(g_cronometros[indiceBloco]);
    	alert("Você perdeu!");
    	window.open(url.replace(pasta, "/rank"),"_self");
    }
    // Bloco tocou a margem esquerda da caixa de blocos. Portanto, para o
	// cronometro dele e remove-o da interface
    if (posicaoBloco < 0) { 
        clearInterval(g_cronometros[indiceBloco]);
        var item = document.getElementById(idBloco);
        item.parentNode.removeChild(item);
    }
}

function detectarColisao(objeto1, objeto2) {
	//return false;
	let colidiu = false;
	let obj1 = document.getElementById(objeto1).getBoundingClientRect();
	let obj2 = document.getElementById(objeto2).getBoundingClientRect();

	let pontos_obj1 = [ {
		x : obj1.left,
		y : obj1.top
	}, {
		x : obj1.left + obj1.width,
		y : obj1.top
	}, {
		x : obj1.left + obj1.width,
		y : obj1.top + obj1.height
	}, {
		x : obj1.left,
		y : obj1.top + obj1.height
	} ];
	let pontos_obj2 = [ {
		x : obj2.left,
		y : obj2.top
	}, {
		x : obj2.left + obj2.width,
		y : obj2.top
	}, {
		x : obj2.left + obj2.width,
		y : obj2.top + obj2.height
	}, {
		x : obj2.left,
		y : obj2.top + obj2.height
	} ];

	let indice = 0;

	while (colidiu == false && indice <= 3)
				(pontos_obj1[indice].x >= obj2.left
				&& pontos_obj1[indice].x <= obj2.left + obj2.width
				&& pontos_obj1[indice].y >= obj2.top
				&& pontos_obj1[indice].y <= obj2.top + obj2.height ||
				pontos_obj2[indice].x >= obj1.left
				&& pontos_obj2[indice].x <= obj1.left + obj1.width
				&& pontos_obj2[indice].y >= obj1.top
				&& pontos_obj2[indice].y <= obj1.top + obj1.height) ? 
				colidiu = true : indice++;
	return colidiu;
}

// ESCUTA O TECLADO
function keyDown(event) {

	const keyPressed = event.key

	if ((keyPressed === 'ArrowUp' || keyPressed === 'w' || keyPressed === 'W' || keyPressed === ' ') && primeiraTecla === false) {
		if (jumpOn === false) {
			jumpOn = true;
			runOn = false;
			setTimeout(jumped, 200);
		}
	}

	if ((keyPressed === 'ArrowDown' || keyPressed === 's' || keyPressed === 'S') && primeiraTecla === false) {
		jumpOn = false;
		runOn = false;
		turnedDown();
	}
	
	if (primeiraTecla) {
		main();
		primeiraTecla = false;
		jumpOn = false;
		runOn = true;
		running();
	}
}

function keyUp(event) {
	
	const keyPressed = event.key
	
	if (keyPressed === 'ArrowDown' || keyPressed === 's' || keyPressed === 'S') {
		setTimeout(running, 200);
	}
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);