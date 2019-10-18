import { NONAME } from "dns";
import { arrayExpression } from "@babel/types";

console.log('JAMES');

//Snake class
class Snake {
    segments: number[][] = [];
    moving: boolean = false;
    orientation: string = 'right';
    dx: number = 10;
    dy: number = 0;

    createBabySnake = () => {
        this.segments.push([30, 10]);
        this.segments.push([20, 10]);
        this.segments.push([10, 10]);
    }

    move = () => {
        //console.log(this.segments);
        let newHeadLocation: number[] = this.segments[0];
        //console.log(newHeadLocation);
        if (this.orientation === 'right') {
            newHeadLocation[0] += this.dx;
        }
        this.segments.unshift(newHeadLocation);
        this.segments = this.segments.slice(0, -1);
        console.log('HERE', this.segments);
    }

    changeOrientation = () => {
        //Get Key

        //Case Switch to set dy and dx for each case

        //return orientation
    }

    checkCollision = () => {
        //check if head co-ordinates are oustide grid

        //return moving
    }

    growSnake = () => {
        //when snake has eaten something
        //
    }
}

// DOM FUNCTIONS
const gameLoop = () => {
    snake.move();
    console.log('LEN', snake.segments.length);
    //purgeSnakes();
    //drawSnakeSegments(snake.segments);

}


const drawSnakeSegments = (snakeSegments) => {
    let grid = document.querySelector('.game-container');

    snakeSegments.forEach(snakeSegment => {
        //console.log(snakeSegment);
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