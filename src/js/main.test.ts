import { Snake } from "./classes";

describe("These are my class tests", () => {
  let snake: Snake;
  beforeEach(() => {
    snake = new Snake();
  });
});



test("Check initial snake is grown to three segments", () => {
  let snake = new Snake;
  expect(snake.segments.length).toEqual(0);
  snake.createBabySnake();
  expect(snake.segments.length).toEqual(3);
});


test("Snake has restarted", () => {
  let snake = new Snake;
  expect(snake.segments.length).toEqual(0);

});