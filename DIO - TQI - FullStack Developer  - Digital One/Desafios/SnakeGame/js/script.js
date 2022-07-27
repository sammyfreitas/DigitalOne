let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let score = 0;
let level = 0;
let velocidade = 200; // Velocidade mínima
let velocidadeLevel = 200;
let foodSameSnake = 0;

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

function foodNotOnSnake(){
    if (food.x) {
        prevFoodX = food.x;
    }

    if (food.y){
        prevFoodY = food.y;
    }

    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
    console.log (prevFoodX, prevFoodY, food.x, food.y);
    if (prevFoodY === food.y && prevFoodX === food.x) {
        foodNotOnSnake();
    } else {
        snake.forEach(function(el){
            if(((el.x === food.x) && (el.y === food.y))) {
                foodNotOnSnake();
            }
        });
    }
}

document.addEventListener('keydown', update);

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = 'left';
    if (event.keyCode == 38 && direction != "down") direction = 'up';
    if (event.keyCode == 39 && direction != "left") direction = 'right';
    if (event.keyCode == 40 && direction != "up") direction = 'down';
}

function iniciarJogo(){

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'up') snakeY -= box;
    if (direction == 'down') snakeY += box;

    if (snakeX != food.x || snakeY != food.y){
        snake.pop();
    } else {
        
        foodNotOnSnake();

        score += 10;
        level += 1;
        velocidade -=2;

        var inputPontuacao = document.getElementById("pontuacao");
        inputPontuacao.value = score;

        if (level % 5 === 0){
            velocidadeLevel -= 10;
            velocidadeCobrinha(velocidadeLevel);
        } else {
            velocidadeCobrinha(velocidadeLevel);
        }
        
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

function velocidadeCobrinha(velocity){
    clearInterval(jogo);
    jogo = setInterval(iniciarJogo, velocity);
}

let jogo = setInterval(iniciarJogo, 200);