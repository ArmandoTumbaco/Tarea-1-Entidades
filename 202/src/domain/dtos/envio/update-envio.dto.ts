import { UpdateCarritoDto } from "../carrito/update-vehicle.dto";

export class UpdateEnvioDto {
  private constructor(
    public readonly id: number,
    public readonly direccion?: string,
    public readonly ciudad?: string,
    public readonly estado?: string,
    public readonly codigoPostal?: string,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.direccion) returnObj.direccion = this.direccion;
    if (this.ciudad) returnObj.ciudad = this.ciudad;
    if (this.estado) returnObj.estado = this.estado;
    if (this.codigoPostal) returnObj.codigoPostal = this.codigoPostal;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateEnvioDto?] {
    const { id, direccion, ciudad, estado, codigoPostal } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (!direccion && !ciudad && !estado && !codigoPostal) {
      return ['At least one property must be provided', undefined];
    }

    return [undefined, new UpdateEnvioDto(id, direccion, ciudad, estado, codigoPostal)];
  }
}
