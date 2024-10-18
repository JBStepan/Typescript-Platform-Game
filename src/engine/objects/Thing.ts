import type { Game } from "../Game.ts";
import { GameObject } from "../GameObject.ts";
import { autoID, Colors } from "../Utils.ts";

export class Thing implements GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  id: string = autoID()
  private game: Game;

  constructor(game: Game) {
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.game = game;
  }
    
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = Colors.RED;
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  update(delta: number): void {
      
  }
}