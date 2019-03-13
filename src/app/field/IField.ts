export interface IField {
    fieldId: number;
    name: string;
    sport: Sports;
    surface: Surfaces;
    price: number;
    players: number;
}

export enum Sports {
    Tennis,
    Paddle,
    Soccer
}

export enum Surfaces{
    Clay,
    Grass,
    Concrete
}