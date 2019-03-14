export class Field {
    constructor(public name="",
    public surface?: Surfaces,
    public price?: number, public players?: number){}
}
export enum Surfaces{
    Clay,
    Grass,
    Concrete
}
export class SelectOverviewExample {
    
    surface: Surfaces;
  }