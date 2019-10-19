import { Snake } from "./classes";
console.log('JAMES');

// DOM FUNCTIONS
const gameLoop = () => {
    snake.move();
    console.log('LEN', snake.segments.length);
    purgeSnakes();
    drawSnakeSegments(snake.segments);

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
    console.log(allSegments, 'JERE');
    Array.from(allSegments).forEach((targetSegment: Element) => {
        targetSegment.remove();
    })

}


//Start game
document.body.onkeyup = function (e) {
    console.log('STARTING GAME');
    if (e.code === 'Space') {
        let title = <HTMLElement>document.querySelector('.title-screen');
        title.style.display = 'none';
        let gameScreen = <HTMLElement>document.querySelector('.game-container');
        gameScreen.style.display = 'block';
        snake.moving = true;
        //Initialise main game loop - breaks upon death
        setInterval(gameLoop, 1000);
    }
}

let snake = new Snake;
snake.createBabySnake();

drawSnakeSegments(snake.segments);