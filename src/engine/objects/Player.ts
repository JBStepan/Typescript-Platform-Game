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

    constructor(input: InputManager) {
        this.x = 100;
        this.y = 100;
        this.width = 50;
        this.height = 50;
        this.input = input;
        this.speed = 5; // Movement speed
    }

    update(delta: number): void {
      if (this.input.isKeyPressed("ArrowUp")) {
        this.y -= this.speed;
      }
      if (this.input.isKeyPressed("ArrowDown")) {
        this.y += this.speed;
      }
      if (this.input.isKeyPressed("ArrowLeft")) {
        this.x -= this.speed;
      }
      if (this.input.isKeyPressed("ArrowRight")) {
        this.x += this.speed;
      }
    }

    draw(ctx: CanvasRenderingContext2D): void {
      ctx.fillStyle = "blue";
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}