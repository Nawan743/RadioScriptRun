const levelConfig = {
	obstaculos: [
		{src: 'passaro.gif', position: 'top'},
		{src: 'barril.png', position: 'down'}
	],
	speedJump: 500,
	speedJumpUp: 15,
	speedmoveObstacle: 5
}
/*
const g_obstaculos = [
	level1 = [
		{src: 'passaro.gif', position: 'top'},
		{src: 'barril.png', position: 'down'}
	],
	level2 = [
		{src: 'passaro.gif', position: 'top'},
		{src: 'monstro.gif', position: 'down'}
	],
	level3 = [
		{src: 'passaro.gif', position: 'top'},
		{src: 'passaro.gif', position: 'middle'},
		{src: 'monstro.gif', position: 'down'},
		{src: 'barril.png', position: 'down'}
	]
];*/

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
		item.parentNode.removeChild(item);
		//console.log('removeObstacle');
		const aux = id.replace('bloco','');
		clearInterval(listObstacles[aux]);
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
				//game.generateObstacles(0);
				/*for (i=0; i< listObstacles.lenght; i++) {
					clearInterval(listObstacles[i]);
				}*/
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
		const posicaoBloco = (parseInt(bloco.left)-1);
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
		gameOver
	}

	let cronCurrentScore;
	let current_score = 0;

	function generateObstacles(flag) {
		console.log('entrou '+flag);
		if (flag == 1) {
			const id = listObstacles.length;
			const obstacle = factoryObstacle();
			obstacle.addObstacle(`bloco${id}`);
			listObstacles[id] = obstacle.moveObstacle(`bloco${id}`);
			setTimeout(generateObstacles,sortearNro(2,4)*1000,1);
		}
	}

	function gameOver() {
		//console.log('GAME OVER');
		generateObstacles(0);
		for (i=0; i< listObstacles.lenght; i++) {
			clearInterval(listObstacles[i]);
		}
	}

	function startCurrentScore() {
		cronCurrentScore = setInterval(updateScore, 100);
	}

	function updateScore() {
		current_score++;
		document.getElementById('current_score_label').innerHTML = pad(current_score, 6);
	}

	function pad(text, size) {
		let s = String(text);
		while (s.length < (size || 2)) {s = "0" + s;}
		return s;
	}

	function sortearNro(a,b) {
		return Math.round(Math.random()*(b-a))+a;
	}

	return game;
}

let gameStarted = false;
const game = factoryGame();
const player = factoryPlayer();
player.await();

let listObstacles = [];

function startGame() {
	gameStarted = true;
	player.run();
	game.startCurrentScore();
	game.generateObstacles(1);
}

function keyDown(event) {

	const keyPressed = event.key;

	if (
		(keyPressed === 'ArrowUp' || keyPressed === 'w' || keyPressed === 'W' || keyPressed === ' ')
		&& gameStarted
		&& transition === false
	) {
		player.jump();
	}

	if (
		(keyPressed === 'ArrowDown' || keyPressed === 's' || keyPressed === 'S')
		&& gameStarted
		&& transition === false
	) {
		player.turnDown();
	}

	if (!gameStarted) {
		startGame();
	}
}

function keyUp(event) {
	
	const keyPressed = event.key
	
	if (keyPressed === 'ArrowDown' || keyPressed === 's' || keyPressed === 'S') {
		setTimeout(() => {
			player.run();
		}, 200);
	}
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
