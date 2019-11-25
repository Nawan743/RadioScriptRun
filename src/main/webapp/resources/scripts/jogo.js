var g_obstaculos = [{src:"passaro.png"},{src:"barril.png"}];
var g_cronometros = [1,2,3,4,5,6,7,8,9,10];

var primeiraTecla = true;
function comecar() {
    if (primeiraTecla) {
        main();
    }
    primeiraTecla = false;
}

function movimentarBoneco(){
   var up = false;
   console.log(event);
   //console.log(event.keyCode)
   document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/correndo.gif')";
    if(event.keyCode == 83 || event.keyCode == 40){
        //console.log('AGAIXADO')
        document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/agaixado.gif')";
    }
    if(event.keyCode == 87 || event.keyCode == 38 || event.keyCode == 32){
        setTimeout(pulo, 200);
        document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/pulando.png')";
    }
   
    // if(event.keyCode == 87 || event.keyCode == 32 || event.keyCode == 38){
    // setTimeout(pulo, 200);
    // }
}

function pulo(){
    up = true;
    document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/pulando.png')";
    document.getElementById('idBoneco').style.top = "0%";
    setTimeout(correr, 300);
}

function correr(){
    up = false;
    document.getElementById('idBoneco').style.top = "40%";
    document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/correndo.gif')";
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Sortear um numero aleatorio no intervalo [a,b]
// Parâmetros: a: limite inferior do intervalo e b: limite superior do intervalo
// Retorno: número aleatório sorteado
// Exemplo de chamada da função: sortear(5,45) -> 30
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
function sortearNro(a,b) {
    return Math.round(Math.random()*(b-a))+a;
}

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

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Cria um novo bloco dinamicamente e adiciona-o na interface (nro max. de
// blocos por tela: 10)
// Parâmetros: indiceBloco: inicialmente igual a zero. É incrementado até 10
// (nro max. de blocos na tela)
// Retorno: nenhum
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
function criarNovoBloco(indiceBloco) {
    var idNovoBloco, cssNovoBloco, novoBloco, leftNovoBloco, caixaBlocos, larguracaixaBlocos, novoParagrafo;
    var larguraBloco = 70;
    var alturaBloco = 60;

    // Acessa a caixa de blocos onde os blocos irão movimentar
    caixaBlocos = window.getComputedStyle(document.getElementById("caixaBlocos"));
    larguracaixaBlocos = caixaBlocos.width;

    // Cria um novo bloco para ser inserido na caixa de blocos
    idNovoBloco = "bloco"+indiceBloco;
    console.log(idNovoBloco);
    novoBloco = document.createElement("div");
    novoBloco.setAttribute("id",idNovoBloco);
    novoBloco.setAttribute("class","novoBloco");
    cssNovoBloco = `left:+${parseInt(larguracaixaBlocos)-larguraBloco}px; width:${larguraBloco}px; height:${alturaBloco}px; z-index:${indiceBloco}; background-image:url(./resources/images/${g_obstaculos[sortearNro(0,1)].src}); background-size: 100%;`;
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
    // Testa detecção de colisão no if
    if(detectarColisao("idBoneco", idBloco)){
    	alert("Você perdeu!");
    	window.open("http://localhost:8080/radioscriptrun/rank", "_self");
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
	var colidiu = false;
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