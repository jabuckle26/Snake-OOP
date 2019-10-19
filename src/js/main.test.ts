import { Snake } from "./classes";
import { Food } from "./classes";

// These won't work??
// describe("These are my class tests", () => {
//   let snake: Snake;
//   beforeEach(() => {
//     snake = new Snake();
//   });
// });

//create new snake at the start of each test

test("Check initial snake is grown to three segments", () => {
  let snake = new Snake;
  expect(snake.segments.length).toEqual(0);
  expect(snake.moving).toEqual(false);
  snake.createBabySnake();
  expect(snake.segments.length).toEqual(3);
  expect(snake.moving).toEqual(true);
});

test("Check snake is moving correctly", () => {
  let snake = new Snake;
  snake.createBabySnake();
  expect(snake.segments.length).toEqual(3);
  snake.move();
  expect(snake.segments.length).toEqual(3);
  //Need compare arrays?? Check that previous head is now second value
});

test("Check if collision occured", () => {
  let snake = new Snake;
  snake.createBabySnake();
  expect(snake.moving).toEqual(true);
  for (let i = 0; i < 50; i++) {
    snake.move();
    snake.checkCollision();
  }
  expect(snake.moving).toEqual(false);
});

const mockReOrientation = (direction:string) =>{
  //Can this be done without JQUERY??
}

test("Check if snake changes direction correctly", () =>{
  let snake = new Snake;
  snake.createBabySnake();
  expect(snake.orientation).toEqual('horizontal');
  // snake.changeOrientation(mockReOrientation('right'))
});

test("Check snake grows correctly", () =>{
  let snake = new Snake;
  snake.createBabySnake();
  expect(snake.segments.length).toEqual(3);
  snake.growSnake();
  expect(snake.segments.length).toEqual(4);
  snake.growSnake();
  expect(snake.segments.length).toEqual(5);
});

test("Check that food is created randomly within grid", () => {
  let food = new Food;
  expect(food.x).toBeGreaterThan(20);
  expect(food.y).toBeGreaterThan(20);
  expect(food.x).toBeLessThan(480);
  expect(food.y).toBeLessThan(480);
  food.createNewFood();
  expect(food.x).toBeGreaterThan(20);
  expect(food.y).toBeGreaterThan(20);
  expect(food.x).toBeLessThan(480);
  expect(food.y).toBeLessThan(480);
});

