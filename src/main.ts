import { Game } from './engine/Game.ts'
import { InputManager } from "./engine/Input.ts";
import { Player } from "./engine/objects/Player.ts";

const canvas = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = globalThis.innerWidth
canvas.height = globalThis.innerHeight

// Set up the game engine
const game = new Game(ctx);

const input = new InputManager()
const player = new Player(input)

// gameEngine.addGameObject({
//   x: 50,
//   y: 50,
//   width: 50,
//   height: 50,
//   update() {
//     // Update logic for the object (if any)
//     this.x += 1; // Move the object to the right
//   },
//   draw(ctx) {
//     ctx.fillStyle = "red"
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   },
//   id: autoID()
// });

game.addGameObject(player)

// Start the game loop
game.start();