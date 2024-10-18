import { Game } from './engine/Game.ts'
import { InputManager } from "./engine/Input.ts";
import { Player } from "./engine/objects/Player.ts";
import { Thing } from "./engine/objects/Thing.ts";

const canvas = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = globalThis.innerWidth;
canvas.height = globalThis.innerHeight;

// Set up the game engine
const game = new Game(ctx);

const input = new InputManager();
const player = new Player(input, game);

game.addGameObject(player);

for (let i = 0; i < 15; i++) {
    let a = new Thing(game); 
    a.x = Math.random() * (globalThis.innerWidth - 200)
    a.y = Math.random() * (globalThis.innerHeight - 200)
    game.addGameObject(a)
}

// Start the game loop
game.start();