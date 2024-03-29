//Snake class
export class Snake {
    segments: number[][] = [];
    moving: boolean = false;
    orientation: string = 'horizontal';
    dx: number = 10;
    dy: number = 0;
    justEaten: boolean = false;

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
        if (this.justEaten) {
            if (this.orientation === 'horizontal') {
                this.segments[0][0] += this.dx;
            } else if (this.orientation === 'vertical') {
                this.segments[0][1] += this.dy;
            }
            this.justEaten = false;
        } else {
            if (this.orientation === 'horizontal') {
                newHeadLocation[0] += this.dx;
            }
            else if (this.orientation === 'vertical') {
                newHeadLocation[1] += this.dy;
            };
            this.segments.unshift(newHeadLocation);
            this.segments = this.segments.slice(0, -1);
        }
    }

    checkCollision = () => {
        const head: number[] = this.segments[0];
        //Collide with wall?
        if (head[0] < -10 || head[0] > 490 || head[1] > 490 || head[1] < -10) {
            this.moving = false;
        } else if(this.internalCheck(head[0],head[1])) {//inside snake
            this.moving = false;
        };
    }

    internalCheck = (x,y) => {
        //To check if the given piece exists in snake
        let isInSnake = false;
        const segmentsToCheck = this.segments.slice(1, this.segments.length);
        segmentsToCheck.forEach(segment => {
            if (segment[0]===x && segment[1]===y){
                isInSnake = true
            };
        })
        return isInSnake;
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
    }

    growSnake = () => {
        this.justEaten = true;
        const headLocation: number[] = this.segments[0].map(i => {
            return i
        });
        this.segments.splice(1, 0, headLocation);
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

export class Grid {
    
    genTemplateGrid = () => {
        let templateGrid: number[][] = [];

        let x: number;
        let y: number;

        for (x=0; x<=500; x + 10) {
            //NEST LOOP
        }

    }
}