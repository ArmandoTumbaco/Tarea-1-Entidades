export class CreateOpinionClienteDto {
  private constructor(
    public readonly calificacion: number,
    public readonly comentario?: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateOpinionClienteDto?] {
    const { calificacion, comentario } = props;

    if (!calificacion || isNaN(Number(calificacion))) {
      return ['Calificacion property is required and must be a valid number', undefined];
    }

    return [undefined, new CreateOpinionClienteDto(Number(calificacion), comentario)];
  }
}
