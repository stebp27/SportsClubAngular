export interface IReservation {
        reservationId: number;
        userId: number;
        sport: string;
        fieldId: number;
        date: Date;
        timeStart: Date;
        timeEnd: Date;
        isDouble: boolean;
        price: number;
        isChallenge: boolean;
    }

