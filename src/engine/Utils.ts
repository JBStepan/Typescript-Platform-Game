export function autoID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i <= 9; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

export enum Colors {
    BLUE="blue",
    RED="red",
    BLACK="black",
    GREEN="green"
}