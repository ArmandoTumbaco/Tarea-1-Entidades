export class UpdateOpinionClienteDto {
  private constructor(
    public readonly id: number,
    public readonly calificacion?: number,
    public readonly comentario?: string,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.calificacion !== undefined) returnObj.calificacion = this.calificacion;
    if (this.comentario !== undefined) returnObj.comentario = this.comentario;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateOpinionClienteDto?] {
    const { id, calificacion, comentario } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (calificacion === undefined && comentario === undefined) {
      return ['At least one property must be provided', undefined];
    }

    return [undefined, new UpdateOpinionClienteDto(Number(id), calificacion, comentario)];
  }
}
