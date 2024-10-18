import { GameObject } from "./GameObject.ts";

class Game {
    private ctx: CanvasRenderingContext2D;
    private gameObjects: GameObject[] = [];
    private gameMap: Map<string, number>;
    private shouldQuit: boolean = false;
    private lastFrameTime: number = 0;

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
            return true;
        } else {
            return false;
        }
    }

    start() {
        requestAnimationFrame(this.loop.bind(this));
    }

    private loop(timestamp: number) {
        const delta = timestamp - this.lastFrameTime;
        this.lastFrameTime = timestamp;
    
        this.update(delta);
        this.render();
    
        if(this.shouldQuit == true) { return; }
        
        requestAnimationFrame(this.loop.bind(this));
    }
    
    private update(delta: number) {
        this.gameObjects.forEach(object => object.update(delta));
    }
    
    private render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.gameObjects.forEach(object => object.draw(this.ctx));
    }
}

export { Game }