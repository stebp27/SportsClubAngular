import { IField } from '../field/IField';
import { Sports } from './IReservation';

export class Reservation{

    constructor(public userFirstName = '',
    public userLastName = '',
    public sport? : Sports,
    public field?: IField,
    public date?: Date,
    public timeStart = '',
    public timeEnd = '',
    public isDouble = false,
    public isChallenge = false
   ){}
}