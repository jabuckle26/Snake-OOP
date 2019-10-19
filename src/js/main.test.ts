import { Snake } from "./classes";

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
  snake.createBabySnake();
  expect(snake.segments.length).toEqual(3);
});

test("Check snake is moving correctly", () => {
  let snake = new Snake;
  snake.createBabySnake();
  expect(snake.segments.length).toEqual(3);
  snake.move();
  expect(snake.segments.length).toEqual(3);
  //Need compare arrays?? Check that previous head is now second value
});