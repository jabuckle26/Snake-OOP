console.log('JAMES');

//snake class
class Snake {
    segments: number[][] = [];

    createBabySnake = () => {
        this.segments.push([10,10])
        this.segments.push([20,10]);
    }
}

let snake = new Snake;
snake.createBabySnake();

const drawSnakeSegments = (snakeSegments) => {
    let grid = document.querySelector('.game-container');

    snakeSegments.forEach(snakeSegment =>{
        console.log(snakeSegment);
        let newSegment = document.createElement('div');
        newSegment.classList.add('snake-segment')
        newSegment.style.left = snakeSegment[0];
        newSegment.style.top = snakeSegment[1];
        grid.appendChild(newSegment);
    })
}

drawSnakeSegments(snake.segments);