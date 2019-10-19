//Snake class
export class Snake {
    segments: number[][] = [];
    moving: boolean = false;
    orientation: string = 'horizontal';
    dx: number = 10;
    dy: number = 0;

    createBabySnake = () => {
        this.segments.push([30, 10]);
        this.segments.push([20, 10]);
        this.segments.push([10, 10]);
        this.moving = true;
    }

    move = () => {
        let newHeadLocation: number[] = this.segments[0].map(i => {
            return i
        });
        if (this.orientation === 'horizontal') {
            newHeadLocation[0] += this.dx;
        }
        else if (this.orientation === 'vertical') {
            newHeadLocation[1] += this.dy;
        }
        this.segments.unshift(newHeadLocation);
        this.segments = this.segments.slice(0, -1);
    }

    checkCollision = () => {
        const head: number[] = this.segments[0];
        if (head[0] < -10 || head[0] > 490 || head[1] > 490 || head[1] < -10) {
            this.moving = false;
        }
    }

    changeOrientation = (ev) => {
        let direction: string = ev.code;
        switch (direction) {
            case "ArrowRight":
                if (this.dx === 0) {
                    this.dx = 10;
                    this.dy = 0;
                    this.orientation = 'horizontal';
                }
                break
            case "ArrowLeft":
                if (this.dx === 0) {
                    this.dx = -10
                    this.dy = 0;
                    this.orientation = 'horizontal';
                }
                break
            case "ArrowDown":
                if (this.dy === 0) {
                    this.dx = 0;
                    this.dy = 10;
                    this.orientation = 'vertical';
                }
                break
            case "ArrowUp":
                if (this.dy === 0) {
                    this.dx = 0;
                    this.dy = -10;
                    this.orientation = 'vertical';
                }
                break
        }
        console.log(this.dx, this.dy);
    }

    growSnake = () => {
        //when snake has eaten something
        //
    }
}


export class Food {
    x: number = Math.floor(Math.random()*(480 -20 + 1))+20;
    y: number = Math.floor(Math.random()*(480 -20 + 1))+20;

    createNewFood = () => {
        ///Update to ensure not created inside snake!

        this.x = Math.floor(Math.random()*(480 -20 + 1))+20;
        this.y = Math.floor(Math.random()*(480 -20 + 1))+20;
    }
}