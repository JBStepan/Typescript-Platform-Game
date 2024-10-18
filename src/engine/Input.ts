export class InputManager {
    private keys: Set<string> = new Set();

    constructor() {
        globalThis.addEventListener('keydown', (e) => this.keys.add(e.key));
        globalThis.addEventListener('keyup', (e) => this.keys.delete(e.key));
    }

    isKeyPressed(key: string): boolean {
        return this.keys.has(key);
    }
}