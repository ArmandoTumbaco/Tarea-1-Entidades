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

  public getCarritos = async (req: Request, res: Response) => {
    const carritos = await this.carritoRepository.getAll();
    return res.json(carritos);
  };

  public getCarritoById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const carrito = await this.carritoRepository.findById(id);
      res.json(carrito);

    } catch (error) {
      res.status(400).json({ error: this.getErrorString(error) });
    }
  };

  public createCarrito = async (req: Request, res: Response) => {
    const [error, createCarritoDto] = CreateCarritoDto.create(req.body);
    if (error) return res.status(400).json({ error: this.getErrorString(error) });

    const carrito = await this.carritoRepository.create(createCarritoDto!);
    res.json(carrito);
  };

  public updateCarrito = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCarritoDto] = UpdateCarritoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error: this.getErrorString(error) });

    const updatedCarrito = await this.carritoRepository.updateById(updateCarritoDto!);
    return res.json(updatedCarrito);
  };

  public deleteCarrito = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedCarrito = await this.carritoRepository.deleteById(id);
    res.json(deletedCarrito);
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
