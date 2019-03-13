export class User {
    constructor(public firstName = '',
    public lastName = '',
    public birthDate?: Date,
    public address='',
    public eMail = '',
    public phoneNumber='') {}
}