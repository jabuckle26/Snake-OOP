import { Snake } from "./classes";
import { Food } from "./classes";
console.log('JAMES');

// DOM FUNCTIONS
const gameLoop = () => {
    document.addEventListener("keyup", snake.changeOrientation);
    snake.move();
    purgeSnakes();
    drawSnakeSegments(snake.segments);
    snake.checkCollision();
    if (snake.segments[0][0] === food.x && snake.segments[0][1] === food.y) {
        console.log('EATEN FOOD');
        snake.growSnake();
        food.createNewFood();
        drawFood(food.x, food.y);
    }
    if (snake.moving === false) {
        gameOver();
    }
    console.log(snake.segments.length);
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
    console.log('FOOD', x,y)
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

const gameOver = () => {
    console.log('GAME OVER!');
    snake = new Snake;
    snake.createBabySnake();
    purgeSnakes();
    drawSnakeSegments(snake.segments);
}

//Start game
document.body.onkeyup = function (e) {
    if (e.code === 'Space') {
        console.log('STARTING GAME');
        console.log('creating snake')
        snake.createBabySnake();
        drawSnakeSegments(snake.segments);
        console.log('creating food');
        drawFood(food.x, food.y);
        let title = <HTMLElement>document.querySelector('.title-screen');
        title.style.display = 'none';
        let gameScreen = <HTMLElement>document.querySelector('.game-container');
        gameScreen.style.display = 'block';
        snake.moving = true;
        //Initialise main game loop - breaks upon death
        setInterval(gameLoop, globalTimer);
    }
}

let globalTimer: number = 200;
let snake = new Snake;
let food = new Food;