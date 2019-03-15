export class User {
    constructor(public firstName = '',
    public lastName = '',
    public birthDate?: Date,
    public address='',
    public email = '',
    public phoneNumber='') {}
}