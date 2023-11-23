import { Request, Response } from 'express';
import { CreateEnvioDto, UpdateEnvioDto } from '../../domain/dtos';
import { CreateEnvio, DeleteEnvio, GetEnvio, GetEnvios, EnvioRepository, UpdateEnvio } from '../../domain';

export class EnviosController {

  //* DI
  constructor(
    private readonly envioRepository: EnvioRepository,
  ) { }

  public getEnvios = (req: Request, res: Response) => {
    new GetEnvios(this.envioRepository)
      .execute()
      .then(envios => res.json(envios))
      .catch(error => res.status(400).json({ error }));
  };

  public getEnvioById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetEnvio(this.envioRepository)
      .execute(id)
      .then(envio => res.json(envio))
      .catch(error => res.status(400).json({ error }));
  };

  public createEnvio = (req: Request, res: Response) => {
    const [error, createEnvioDto] = CreateEnvioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateEnvio(this.envioRepository)
      .execute(createEnvioDto!)
      .then(envio => res.json(envio))
      .catch(error => res.status(400).json({ error }));
  };

  public updateEnvio = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateEnvioDto] = UpdateEnvioDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateEnvio(this.envioRepository)
      .execute(updateEnvioDto!)
      .then(envio => res.json(envio))
      .catch(error => res.status(400).json({ error }));
  };

  public deleteEnvio = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteEnvio(this.envioRepository)
      .execute(id)
      .then(envio => res.json(envio))
      .catch(error => res.status(400).json({ error }));
  };
}
