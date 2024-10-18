export interface GameObject {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    image?: string;
    update(delta: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
}