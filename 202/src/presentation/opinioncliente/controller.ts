import { Request, Response } from 'express';
import { CreateOpinionClienteDto, UpdateOpinionClienteDto } from '../../domain/dtos';
import {CreateOpinionCliente,DeleteOpinionCliente,GetOpinionCliente,GetOpinionClientes,OpinionClienteRepository,UpdateOpinionCliente
} from '../../domain';

export class OpinionClientesController {

  //* DI
  constructor(
    private readonly opinionClienteRepository: OpinionClienteRepository,
  ) { }

  public getOpinionClientes = (req: Request, res: Response) => {
    new GetOpinionClientes(this.opinionClienteRepository)
      .execute()
      .then(opinionClientes => res.json(opinionClientes))
      .catch(error => res.status(400).json({ error: this.getErrorString(error) }));
  };

  public getOpinionClienteById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetOpinionCliente(this.opinionClienteRepository)
      .execute(id)
      .then(opinionCliente => res.json(opinionCliente))
      .catch(error => res.status(400).json({ error: this.getErrorString(error) }));
  };

  public createOpinionCliente = (req: Request, res: Response) => {
    const [error, createOpinionClienteDto] = CreateOpinionClienteDto.create(req.body);
    if (error) return res.status(400).json({ error: this.getErrorString(error) });

    new CreateOpinionCliente(this.opinionClienteRepository)
      .execute(createOpinionClienteDto!)
      .then(opinionCliente => res.json(opinionCliente))
      .catch(error => res.status(400).json({ error: this.getErrorString(error) }));
  };

  public updateOpinionCliente = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateOpinionClienteDto] = UpdateOpinionClienteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error: this.getErrorString(error) });

    new UpdateOpinionCliente(this.opinionClienteRepository)
      .execute(updateOpinionClienteDto!)
      .then(opinionCliente => res.json(opinionCliente))
      .catch(error => res.status(400).json({ error: this.getErrorString(error) }));
  };

  public deleteOpinionCliente = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteOpinionCliente(this.opinionClienteRepository)
      .execute(id)
      .then(opinionCliente => res.json(opinionCliente))
      .catch(error => res.status(400).json({ error: this.getErrorString(error) }));
  };

  private getErrorString(error: any): string {
    if (typeof error === 'string') {
      return error; // Si es una cadena, devolver la cadena directamente
    } else if (error instanceof Error && 'message' in error) {
      return error.message; // Si es un objeto Error, devolver el mensaje de error
    } else {
      return 'Error desconocido';
    }
  }
}
