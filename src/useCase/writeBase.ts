import type { Maze } from 'src/entities/Maze';
import { writeMaze } from './writeMaze';

export function writeBody(
  canvas: HTMLCanvasElement,
  canvasContext: CanvasRenderingContext2D,
  maze: Maze,
) {
  // fill the background of the canvas with grass.png

  const grass = new Image();
  grass.src = '../assets/grass.png';

  grass.onload = () => {
    const pattern = canvasContext.createPattern(
      grass,
      'repeat',
    ) as CanvasPattern;
    canvasContext.fillStyle = pattern;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    // WriteMaze function should be here:

    writeMaze(canvas, canvasContext, maze);
  };
}
