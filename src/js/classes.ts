//Snake class
export class Snake {
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
