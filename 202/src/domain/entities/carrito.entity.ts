export class CarritoEntity {

  constructor(
    public id: number,
    public cantidad: number,
  ) {}

  public static fromObject(object: { [key: string]: any }): CarritoEntity {
    const { id, cantidad } = object;
    
    if (!id) throw 'Id is required';
    if (!cantidad) throw 'Cantidad is required';

    return new CarritoEntity(id, cantidad);
  }

}
