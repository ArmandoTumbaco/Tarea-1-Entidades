import { CarritoEntity } from "./carrito.entity";

export class EnvioEntity {

  constructor(
    public id: number,
    public direccion: string,
    public ciudad: string,
    public estado: string,
    public codigoPostal: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): EnvioEntity {
    const { id, direccion, ciudad, estado, codigoPostal } = object;
    
    if (!id) throw 'Id is required';
    if (!direccion) throw 'Direccion is required';
    if (!ciudad) throw 'Ciudad is required';
    if (!estado) throw 'Estado is required';
    if (!codigoPostal) throw 'CodigoPostal is required';

    return new EnvioEntity(id, direccion, ciudad, estado, codigoPostal);
  }

}
