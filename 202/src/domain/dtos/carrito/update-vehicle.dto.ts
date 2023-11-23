export class UpdateCarritoDto {
  private constructor(
    public readonly id: number,
    public readonly cantidad?: number,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.cantidad !== undefined) returnObj.cantidad = this.cantidad;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateCarritoDto?] {
    const { id, cantidad } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (cantidad === undefined) {
      return ['At least one property must be provided', undefined];
    }

    return [undefined, new UpdateCarritoDto(Number(id), cantidad)];
  }
}
