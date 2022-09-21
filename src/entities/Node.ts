export class MazeNode {
  public readonly id: string;
  public x: number;
  public y: number;
  public neighbors: MazeNode[] = [];

  public parent: MazeNode | null;

  private _g: number; // distância percorrida

  private _h: number; // distância até o alvo

  private _f: number; // distância total (g + h)

  public isWall: boolean;

  constructor(id: string, x: number, y: number) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.g = 0;
    this.h = 0;
    this.f = 0;
    this.parent = null;
    this.isWall = false;
  }

  public addNeighbor(node: MazeNode) {
    this.neighbors.push(node);
  }

  public get g(): number {
    return this._g;
  }
  public set g(value: number) {
    this._g = value;
  }

  public get h(): number {
    return this._h;
  }
  public set h(value: number) {
    this._h = value;
  }

  public get f(): number {
    return this._f;
  }
  public set f(value: number) {
    this._f = value;
  }
}
