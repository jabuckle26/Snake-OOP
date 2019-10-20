import { Snake } from "./classes";
import { Food } from "./classes";

// DOM FUNCTIONS
const gameLoop = () => {
    document.addEventListener("keyup", snake.changeOrientation);
    snake.move();
    purgeSnakes();
    drawSnakeSegments(snake.segments);
    snake.checkCollision();
    if (snake.segments[0][0] === food.x && snake.segments[0][1] === food.y) {
        snake.growSnake();
        food.createNewFood();
        drawFood(food.x, food.y);
        score++;
        updateScore();
    }
    if (snake.moving === false) {
        score = 0;
        console.log(score);
        updateScore();
        gameOver();
    }
}

const drawSnakeSegments = (snakeSegments) => {
    let grid = document.querySelector('.game-container');
    snakeSegments.forEach(snakeSegment => {
        let newSegment = document.createElement('div');
        newSegment.classList.add('snake-segment');
        newSegment.style.left = snakeSegment[0] + 'px';
        newSegment.style.top = snakeSegment[1] + 'px';
        grid.appendChild(newSegment);
    })
}

const purgeSnakes = () => {
    const allSegments: NodeList = document.querySelectorAll('.snake-segment');
    Array.from(allSegments).forEach((targetSegment: Element) => {
        targetSegment.remove();
    })
}

const drawFood = (x, y) => {
    let grid = document.querySelector('.game-container');
    if (document.querySelector('.food') === null) {
    let newFood = document.createElement('div');
    newFood.classList.add('food');
    newFood.style.left = x + 'px';
    newFood.style.top = y + 'px';
    grid.appendChild(newFood);
    }
    else {
        let foodDiv = <HTMLElement>document.querySelector('.food');
        foodDiv.style.left = x + 'px';
        foodDiv.style.top = y + 'px';
    }
}

const updateScore = () => {
    let scoreText = <HTMLElement>document.querySelector('.score-holder');
    scoreText.innerHTML = `Score: ${score}`;
}

const gameOver = () => {
    console.log('GAME OVER!');
    snake = new Snake;
    snake.createBabySnake();
    purgeSnakes();
    drawSnakeSegments(snake.segments);
}

//Start game -- INITIAL SETUP
document.body.onkeyup = function (e) {
    if (e.code === 'Space') {
        snake.createBabySnake();
        drawSnakeSegments(snake.segments);
        drawFood(food.x, food.y);
        let title = <HTMLElement>document.querySelector('.title-screen');
        title.style.display = 'none';
        let gameScreen = <HTMLElement>document.querySelector('.game-container');
        gameScreen.style.display = 'block';
        snake.moving = true;
        
        //Initialise main game loop
        setInterval(gameLoop, globalTimer);
    }
}

//Global variables
let globalTimer: number = 100;
let snake = new Snake;
let food = new Food;
let score: number = 0;