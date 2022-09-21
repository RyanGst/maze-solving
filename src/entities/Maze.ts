import { MazeNode } from './Node';

export class Maze {
  public nodes: MazeNode[][];

  public width: number;

  public height: number;

  public start: MazeNode;

  public end: MazeNode;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.nodes = [];
    this.start = new MazeNode('start', 0, 0);
    this.end = new MazeNode('end', 0, 0);

    this.generate();
  }

  public generate() {
    const height = this.height;
    const width = this.width;

    for (let y = 0; y < height; y++) {
      const row: MazeNode[] = [];
      for (let x = 0; x < width; x++) {
        const node = new MazeNode(`${x}-${y}`, x, y);
        row.push(node);
      }
      this.nodes.push(row);
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const node = this.nodes[y][x];
        if (y > 0) {
          node.addNeighbor(this.nodes[y - 1][x]);
        }
        if (y < height - 1) {
          node.addNeighbor(this.nodes[y + 1][x]);
        }
        if (x > 0) {
          node.addNeighbor(this.nodes[y][x - 1]);
        }
        if (x < width - 1) {
          node.addNeighbor(this.nodes[y][x + 1]);
        }
      }
    }
  }

  public setStart(x: number, y: number) {
    this.start = this.nodes[y][x];
  }

  public setEnd(x: number, y: number) {
    this.end = this.nodes[y][x];
  }


  public setWalls(walls: string[]) {
    walls.forEach((wall) => {
      const [x, y] = wall.split(',');
      this.nodes[Number(y)][Number(x)].isWall = true;
    });
  }

}
