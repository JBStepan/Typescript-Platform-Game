export interface GameObject {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color?: string;
    image?: string;
    update(delta: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
}