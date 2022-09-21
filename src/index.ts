/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { Maze } from './entities/Maze';
import { writeBody } from './useCase/writeBase';
import { writeMaze } from './useCase/writeMaze';

function main() {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;

  const canvasContext = canvas.getContext('2d');

  const maze = new Maze(10, 10);

  maze.setStart(1, 1);

  maze.setEnd(9, 9);

  maze.setWalls([
    '1,5',
    '1,6',
    '1,7',
    '2,7',
    '2,8',
    '2,9',
  ]);

  if (!canvasContext) {
    return alert('carregando...');
  }

  writeBody(canvas, canvasContext, maze);
  /* //draw start and end

    */
}

main();
