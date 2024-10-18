import { GameObject } from "./GameObject.ts";

class Game {
    private ctx: CanvasRenderingContext2D;
    private gameObjects: GameObject[] = [];
    private gameMap: Map<string, number>;
    private shouldQuit: boolean = false;

    constructor(canvas: CanvasRenderingContext2D) {
        this.ctx = canvas;
        this.gameMap = new Map();
    }

    addGameObject(gameObject: GameObject) {
        const a = this.gameObjects.push(gameObject);
        this.gameMap.set(gameObject.id, a);
    }

    removeGameObject(gameObject?: GameObject) {
        if (gameObject) {
            // deno-lint-ignore no-explicit-any
            const idx: any = this.gameMap.get(gameObject.id);
            this.gameObjects.splice(idx, 1);
        }
    }

    start() {

    }
}

export { Game }