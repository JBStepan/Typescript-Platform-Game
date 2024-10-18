export class InputManager {
    private keys: { [key: string]: boolean } = {}; // Changed to an object to track key states

    constructor() {
      // Listen for keydown and keyup events
      globalThis.addEventListener('keydown', (e) => {
        this.keys[e.key] = true; // Set the key as "pressed"
      });
  
      globalThis.addEventListener('keyup', (e) => {
        this.keys[e.key] = false; // Set the key as "released"
      });
    }
  
    // Check if a key is currently being held down
    isKeyPressed(key: string): boolean {
      return this.keys[key] === true; // Return true if the key is pressed
    }
}