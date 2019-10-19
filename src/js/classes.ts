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
    max: number = Math.floor(480);
    min: number = Math.ceil(20);
    multiplier: number = this.max - this.min + 1;

    x: number = Math.round((Math.random() * this.multiplier) / 10) * 10;
    y: number = Math.round((Math.random() * this.multiplier) / 10) * 10;

    createNewFood = () => {
        ///Update to ensure not created inside snake!

        this.x = Math.round((Math.random() * this.multiplier) / 10) * 10;
        this.y = Math.round((Math.random() * this.multiplier) / 10) * 10;

    }
}

function rand_10(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}