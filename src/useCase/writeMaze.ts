import type { Maze } from 'src/entities/Maze';

export function writeMaze(
  canvas: HTMLCanvasElement,
  canvasContext: CanvasRenderingContext2D,
  maze: Maze,
) {
  const width = 8;

  const height = 8;

  writeWalls(maze, canvasContext, canvas, width, height);

  writeStartAndEnd(canvasContext, maze, width, height);
}

function writeWalls(
  maze: Maze,
  canvasContext: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,

  width: number,
  height: number,
) {
  // write a function to draw the walls of the maze
  // tip: use the canvasContext to draw the walls
  // tip: use the width and height to draw the walls
  // tip: use the maze.isWall to draw the walls
  const rock = new Image();
  rock.src = '../assets/rock.png';
  rock.onload = () => {
    for (let y = 0; y < maze.nodes.length; y++) {
      const elements = maze.nodes[y];
      for (let x = 0; x < elements.length; x++) {
        const node = elements[x];
        if (node.isWall) {
          canvasContext.drawImage(rock, x * width, y * height, width, height);
        }
      }
    }
  };
}

function writeStartAndEnd(
  canvasContext: CanvasRenderingContext2D,
  maze: Maze,
  width: number,
  height: number,
) {
  canvasContext.beginPath();

  canvasContext.rect(
    maze.start.x * width,
    maze.start.y * height,
    width,
    height,
  );

  canvasContext.fillStyle = 'green';

  canvasContext.fill();

  canvasContext.closePath();

  canvasContext.beginPath();

  canvasContext.rect(maze.end.x * width, maze.end.y * height, width, height);

  canvasContext.fillStyle = 'red';

  canvasContext.fill();

  canvasContext.closePath();
}
