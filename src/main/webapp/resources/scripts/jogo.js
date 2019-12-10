const ls = localStorage.getItem('level');
let level = 1;
if (ls == "medio") {
	level = 2;
} else if (ls == "dificil") {
	level = 3;
}
console.log(level);

let levelConfig = configLevelGame(level);

function configLevelGame(level) {

	if (level == 1) {
		return {
			obstaculos: [
				{src: 'passaro.gif', position: 'top'},
				{src: 'barril.png', position: 'down'}
			],
			speedJump: 600,
			speedJumpUp: 15,
			speedmoveObstacle: 5,
			distanceMoveObstacle:1,
			multiplyGenerateObstacle:900
		};
	} else if (level == 2) {
		return {
			obstaculos: [
				{src: 'passaro.gif', position: 'top'},
				{src: 'monstro.gif', position: 'down'},
				{src: 'barril.png', position: 'down'}
			],
			speedJump: 300,
			speedJumpUp: 10,
			speedmoveObstacle: 3,
			distanceMoveObstacle:2,
			multiplyGenerateObstacle:500
		};
	} else if (level == 3) {
		return {
			obstaculos: [
				{src: 'passaro.gif', position: 'top'},
				{src: 'passaro.gif', position: 'middle'},
				{src: 'morcego.gif', position: 'middle'},
				{src: 'monstro.gif', position: 'down'},
				{src: 'barril.png', position: 'down'}
			],
			speedJump: 250,
			speedJumpUp: 8,
			speedmoveObstacle: 1,
			distanceMoveObstacle:3,
			multiplyGenerateObstacle:400
		};
	}
}

let transition;

const factoryPlayer = function() {

	let marginTop;
	let cronJumpUp;
	let cronJumpDown;

	function await() {
		transition = false;
		marginTop = 230;
		document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/parado.gif')";
		document.getElementById('idBoneco').style.height = "100px";
		document.getElementById('idBoneco').style.marginTop = `${marginTop}px`;
	}

	function run() {
		marginTop = 230;
		document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/correndo.gif')";
		document.getElementById('idBoneco').style.height = "100px";
		document.getElementById('idBoneco').style.marginTop = `${marginTop}px`;
	}

	function turnDown() {
		marginTop = 250;
		document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/agaixado.gif')";
		document.getElementById('idBoneco').style.height = "80px";
		document.getElementById('idBoneco').style.marginTop = `${marginTop}px`;
	}

	function jump() {
		transition = true;
		marginTop = 230;
		document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/pulando.png')";
		document.getElementById('idBoneco').style.height = "100px";
		document.getElementById('idBoneco').style.marginTop = `${marginTop}px`;
		cronJumpUp = setInterval(jumpUp,levelConfig.speedJumpUp);
	}

	function jumpUp() {
		if (marginTop > 50) {
			marginTop -= 10;
			document.getElementById('idBoneco').style.marginTop = `${marginTop}px`;
		} else {
			clearInterval(cronJumpUp);
			setTimeout(() => {
				cronJumpDown = setInterval(jumpDown,levelConfig.speedJumpUp);
			}, levelConfig.speedJump);
		}
	}

	function jumpDown() {
		if (marginTop < 230) {
			marginTop += 10;
			document.getElementById('idBoneco').style.marginTop = `${marginTop}px`;
		} else {
			clearInterval(cronJumpDown);
			transition = false;
			run();
		}
	}

	function kill() {
		marginTop = 230;
		document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/morrendo.gif')";
		setTimeout(() => {
			document.getElementById('idBoneco').style.backgroundImage = "url('./resources/images/morto_1.png')";
		}, 700);
		document.getElementById('idBoneco').style.marginTop = `${marginTop}px`;
	}

	const player = {
		await,
		run,
		turnDown,
		jump,
		kill
	}

	return player;
}

const factoryObstacle = function() {

	const obstacle = {
		addObstacle,
		removeObstacle,
		moveObstacle,
		checkColision
	}

	function addObstacle(id) {

		const larguraBloco = 60;
		const alturaBloco = 60;
		let cssNovoBloco;

		// Acessa a caixa de blocos onde os blocos irĂ£o movimentar
		let caixaBlocos = window.getComputedStyle(document.getElementById("caixaBlocos"));
		const larguracaixaBlocos = caixaBlocos.width;

		// Cria um novo bloco para ser inserido na caixa de blocos
		let novoBloco = document.createElement("div");
		novoBloco.setAttribute("id",id);
		novoBloco.setAttribute("class","novoBloco");

		const numSort = sortearNro(0,levelConfig.obstaculos.length-1);

		if (levelConfig.obstaculos[numSort].position == 'top') {
			cssNovoBloco = `margin-top: 70px; left:+${parseInt(larguracaixaBlocos)-larguraBloco}px; width:${larguraBloco}px; height:${alturaBloco}px; z-index:5; background-image:url(./resources/images/${levelConfig.obstaculos[numSort].src}); background-size: 100%;`;
		} else if (levelConfig.obstaculos[numSort].position == 'middle') {
			cssNovoBloco = `margin-top: 170px; left:+${parseInt(larguracaixaBlocos)-larguraBloco}px; width:${larguraBloco}px; height:${alturaBloco}px; z-index:5; background-image:url(./resources/images/${levelConfig.obstaculos[numSort].src}); background-size: 100%;`;
		} else {
			cssNovoBloco = `margin-top: 270px; left:+${parseInt(larguracaixaBlocos)-larguraBloco}px; width:${larguraBloco}px; height:${alturaBloco}px; z-index:5; background-image:url(./resources/images/${levelConfig.obstaculos[numSort].src}); background-size: 100%;`;    	
		}

		novoBloco.setAttribute("style",cssNovoBloco);
		document.getElementById("caixaBlocos").appendChild(novoBloco);
		//console.log('addObstacle');
	}

	function removeObstacle(id) {
		const item = document.getElementById(id);
		//console.log(item);
		if (item !== null)
			item.parentNode.removeChild(item);
		const aux = id.replace('bloco','');
		clearInterval(listObstacles[aux]);
		//console.log(listObstacles)
	}

	function moveObstacle(id) {
		return setInterval(moveObstacleLeft,levelConfig.speedmoveObstacle,id);
	}

	function checkColision(id) {
		//return false;
		let colidiu = false;
		const obj1 = document.getElementById('idBoneco').getBoundingClientRect();
		const obj2 = document.getElementById(id).getBoundingClientRect();

		const pontos_obj1 = [ {
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

		const pontos_obj2 = [ {
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

		while (colidiu == false && indice <= 3) {
			if (pontos_obj1[indice].x >= obj2.left
					&& pontos_obj1[indice].x <= obj2.left + obj2.width
					&& pontos_obj1[indice].y >= obj2.top
					&& pontos_obj1[indice].y <= obj2.top + obj2.height ||
					pontos_obj2[indice].x >= obj1.left
					&& pontos_obj2[indice].x <= obj1.left + obj1.width
					&& pontos_obj2[indice].y >= obj1.top
					&& pontos_obj2[indice].y <= obj1.top + obj1.height
			) {
				colidiu = true;
				for (var i = 1; i < 99999; i++) {
					window.clearInterval(i);
				}
				player.kill();
				game.gameOver();

			} else {
				indice++;
			}
		}
		return colidiu;
	}

	function moveObstacleLeft(id) {
		//console.log(`moveObstacleLeft ${id}`)
		const bloco = window.getComputedStyle(document.getElementById(id));
		const posicaoBloco = (parseInt(bloco.left)-levelConfig.distanceMoveObstacle);
		document.getElementById(id).style.left = `${posicaoBloco}px`;
		//console.log('move')
		checkColision(id)
		if (posicaoBloco < 0) { 
			removeObstacle(id);
		}
	}

	function sortearNro(a,b) {
		return Math.round(Math.random()*(b-a))+a;
	}

	return obstacle;
}

const factoryGame = function() {
	const game = {
		startCurrentScore,
		generateObstacles,
		gameOver,
		piscarElemento,
		callRanking
	}

	let cronCurrentScore;
	let current_score = 0;

	function generateObstacles(flag,id=0) {
		if (flag == 1) {
			const obstacle = factoryObstacle();
			obstacle.addObstacle(`bloco${id}`);
			listObstacles[id] = obstacle.moveObstacle(`bloco${id}`);
			setTimeout(generateObstacles,sortearNro(2,4)*levelConfig.multiplyGenerateObstacle,1,(id>9)?0:id+1);
		}
	}

	function gameOver() {
		//console.log('GAME OVER');
		CtrlGameOver = true;
		console.log(`CtrlGameOver ${CtrlGameOver}`);
		generateObstacles(0);
		document.getElementById('gameOver').style.display = 'block';
		//Salva os dados no banco
		const oReq = new XMLHttpRequest();
		oReq.open("post", "/atualiza-rank", true);
		// Envia a informação do cabeçalho junto com a requisição.
		oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		oReq.send('player=wanderson&pontosAtuais='+current_score);
		oReq.onload = function() {
			console.log('salvou os pontos')
			// Exibe mensagem
			document.getElementById('msgGeral').innerHTML = "Pressione <i>espaço</i> para visualizar o ranking";
			document.getElementById('msgGeral').style.display = "block";
			cron_piscar = setInterval(() => {
				piscarElemento('msgGeral');
			}, 250);
		};
	}

	function startCurrentScore() {
		cronCurrentScore = setInterval(updateScore, 100);
	}

	function updateScore() {
		current_score++;
		document.getElementById('current_score_label').innerHTML = pad(current_score, 6);
		if (current_score == 200 && level == 1) { // Nível 2
			changeLevel(++level).then(() => {
				levelConfig = configLevelGame(level);
				startGame();
				console.log('ja foi')
			});
		} else if(current_score == 500 && level == 2) { // Nível 3
			changeLevel(++level).then(() => {
				levelConfig = configLevelGame(level);
				startGame();
				console.log('ja foi')
			});
		}
	}

	async function changeLevel(level) {
		return await new Promise(resolve => {
			// Imprime na tela
			document.getElementById('msgLevel').innerHTML = `LEVEL ${level}`;
			document.getElementById('msgLevel').style.display = 'block';
			player.await();

			// Pausa o jogo até a mudança de nível
			generateObstacles(0);
			for (let i = 1; i < 99999; i++) {
				window.clearInterval(i);
			}

			// Pisca o boneco
			document.getElementById('idBoneco').style.display = "none";
			cron_piscar = setInterval(() => {
				piscarElemento('idBoneco');
			}, 250); 

			// Remove todos os obstáculos
			const obstacle = factoryObstacle();
			for (let i = 0; i < listObstacles.length; i++) {
				obstacle.removeObstacle('bloco'+i);
			}

			//Salva os dados no banco
			const oReq = new XMLHttpRequest();
			oReq.open("post", "/atualiza-rank", true);
			// Envia a informação do cabeçalho junto com a requisição.
			oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			oReq.send('player=wanderson&pontosAtuais='+current_score);
			oReq.onload = function() {
				setTimeout(() => {
					clearInterval(cron_piscar);
					document.getElementById('idBoneco').style.display = "block";
					document.getElementById('msgLevel').style.display = 'none';
					resolve(level);
				}, 2000);
			};
		});
	}

	function piscarElemento(id) {
		let elem = document.getElementById(id);
    	if (elem.style.display == 'block') {
            elem.style.display = 'none';
	    } else {
            elem.style.display = 'block';
        }
	}

	function pad(text, size) {
		let s = String(text);
		while (s.length < (size || 2)) {s = "0" + s;}
		return s;
	}

	function sortearNro(a,b) {
		return Math.round(Math.random()*(b-a))+a;
	}
	
	function callRanking() {
		location = '/rank';
	}

	return game;
}

let gameStarted = false;
let CtrlGameOver = false;
const game = factoryGame();
const player = factoryPlayer();
player.await();
//Exibe mensagem
document.getElementById('msgGeral').innerHTML = "Pressione <i>espaço</i> para começar";
document.getElementById('msgGeral').style.display = "block";
cron_piscar_inicial = setInterval(() => {
	game.piscarElemento('msgGeral');
}, 250);

let listObstacles = [];

function startGame() {
	gameStarted = true;
	player.run();
	game.startCurrentScore();
	game.generateObstacles(1);
}

function keyDown(event) {
	console.log(`CtrlGameOver ${CtrlGameOver}`);
	const keyPressed = event.key;

	if (
		(keyPressed === 'ArrowUp' || keyPressed === 'w' || keyPressed === 'W' || keyPressed === ' ')
		&& gameStarted && CtrlGameOver === false
		&& transition === false
	) {
		player.jump();
	}

	if (
		(keyPressed === 'ArrowDown' || keyPressed === 's' || keyPressed === 'S')
		&& gameStarted && CtrlGameOver === false
		&& transition === false
	) {
		player.turnDown();
	}

	// Começa o jogo
	if (keyPressed === ' ' && gameStarted === false && CtrlGameOver === false) {
		clearInterval(cron_piscar_inicial);
		document.getElementById('msgGeral').style.display = "none";
		startGame();
	}

	// Encerra o jogo
	if (keyPressed === ' ' && gameStarted && CtrlGameOver) {
		game.callRanking();
	}
}

function keyUp(event) {
	
	const keyPressed = event.key;
	
	if (
		(keyPressed === 'ArrowDown' || keyPressed === 's' || keyPressed === 'S')
		&& gameStarted && CtrlGameOver === false
	) {
		setTimeout(() => {
			player.run();
		}, 200);
	}
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);