import { Request, Response } from 'express';
import { CreateCarritoDto, UpdateCarritoDto } from '../../domain/dtos';
import {
  CreateCarrito,
  DeleteCarrito,
  GetCarrito,
  GetCarritos,
  CarritoRepository,
  UpdateCarrito
} from '../../domain';

export class CarritosController {

  //* DI
  constructor(
    private readonly carritoRepository: CarritoRepository,
  ) { }

  public getCarritos = (req: Request, res: Response) => {
    new GetCarritos(this.carritoRepository)
      .execute()
      .then(carritos => res.json(carritos))
      .catch(error => res.status(400).json({ error }));
  };

  public getCarritoById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetCarrito(this.carritoRepository)
      .execute(id)
      .then(carrito => res.json(carrito))
      .catch(error => res.status(400).json({ error }));
  };

  public createCarrito = (req: Request, res: Response) => {
    const [error, createCarritoDto] = CreateCarritoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateCarrito(this.carritoRepository)
      .execute(createCarritoDto!)
      .then(carrito => res.json(carrito))
      .catch(error => res.status(400).json({ error }));
  };

  public updateCarrito = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCarritoDto] = UpdateCarritoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateCarrito(this.carritoRepository)
      .execute(updateCarritoDto!)
      .then(carrito => res.json(carrito))
      .catch(error => res.status(400).json({ error }));
  };

  public deleteCarrito = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteCarrito(this.carritoRepository)
      .execute(id)
      .then(carrito => res.json(carrito))
      .catch(error => res.status(400).json({ error }));
  };
}
