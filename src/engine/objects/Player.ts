import type { Game } from "../Game.ts";
import type { GameObject } from "../GameObject.ts";
import { InputManager } from "../Input.ts";
import { autoID } from "../Utils.ts";

export class Player implements GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  id: string = autoID();
  private input: InputManager;
  private speed: number;
  private game: Game;

  constructor(input: InputManager, game: Game) {
    this.x = 100;
    this.y = 100;
    this.width = 50;
    this.height = 50;
    this.input = input;
    this.speed = 15; // Movement speed
    this.game = game;
  }

  update(delta: number): void {
    const speedPerSecond = this.speed * delta * 0.01; // Added with help from Co-Pilot

    if (this.input.isKeyPressed("ArrowUp")) {
      this.y -= speedPerSecond;
    }
    if (this.input.isKeyPressed("ArrowDown")) {
      this.y += speedPerSecond;
    }
    if (this.input.isKeyPressed("ArrowLeft")) {
      this.x -= speedPerSecond;
    }
    if (this.input.isKeyPressed("ArrowRight")) {
      this.x += speedPerSecond;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}