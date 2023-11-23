export class OpinionClienteEntity {

  constructor(
    public id: number,
    public calificacion: number,
    public comentario?: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): OpinionClienteEntity {
    const { id, calificacion, comentario } = object;
    
    if (!id) throw 'Id is required';
    if (!calificacion) throw 'Calificacion is required';

    return new OpinionClienteEntity(id, calificacion, comentario);
  }

}

  