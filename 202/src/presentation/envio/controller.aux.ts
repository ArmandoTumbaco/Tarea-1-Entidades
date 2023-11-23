// DDD
import { Request, Response } from 'express';
import { CreateEnvioDto, UpdateEnvioDto } from '../../domain/dtos';
import { EnvioRepository } from '../../domain'; // Asegúrate de importar el repositorio correcto

export class EnviosController {

  //* DI
  constructor(
    private readonly envioRepository: EnvioRepository, // Asegúrate de inyectar el repositorio correcto
  ) { }

  public getEnvios = async (req: Request, res: Response) => {
    const envios = await this.envioRepository.getAll();
    return res.json(envios);
  };

  public getEnvioById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const envio = await this.envioRepository.findById(id);
      res.json(envio);

    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createEnvio = async (req: Request, res: Response) => {
    const [error, createEnvioDto] = CreateEnvioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const envio = await this.envioRepository.create(createEnvioDto!);
    res.json(envio);
  };

  public updateEnvio = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateEnvioDto] = UpdateEnvioDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedEnvio = await this.envioRepository.updateById(updateEnvioDto!);
    return res.json(updatedEnvio);
  };

  public deleteEnvio = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedEnvio = await this.envioRepository.deleteById(id);
    res.json(deletedEnvio);
  };
}
