export interface IReservation {
        reservationId: number;
        userFirstName: string;
        userLastName: string;
        sport: Sports;
        fieldId: number;
        date: Date;
        timeStart: Date;
        timeEnd: Date;
        isDouble: boolean;
        price: number;
        isChallenge: boolean;
    }

export enum Sports {
    Tennis,
    Paddle,
    Soccer
}