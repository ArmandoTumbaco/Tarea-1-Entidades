import { CreateCarritoDto } from "../carrito/create-carrito.dto";

export class CreateEnvioDto {
  private constructor(
    public readonly direccion: string,
    public readonly ciudad: string,
    public readonly estado: string,
    public readonly codigoPostal: string,
  ) {}

  static create(props: {direccion: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
  }): [string?, CreateEnvioDto?] {
    const { direccion, ciudad, estado, codigoPostal } = props;

    if (!direccion) return ['Direccion property is required', undefined];
    if (!ciudad) return ['Ciudad property is required', undefined];
    if (!estado) return ['Estado property is required', undefined];
    if (!codigoPostal) return ['CodigoPostal property is required', undefined];

    return [undefined, new CreateEnvioDto(direccion, ciudad, estado, codigoPostal)];
  }
}
