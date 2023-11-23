export class CreateCarritoDto {
  private constructor(
    public readonly cantidad: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCarritoDto?] {
    const { cantidad } = props;

    if (!cantidad || isNaN(Number(cantidad))) {
      return ['Cantidad property is required and must be a valid number', undefined];
    }

    return [undefined, new CreateCarritoDto(Number(cantidad))];
  }
}
