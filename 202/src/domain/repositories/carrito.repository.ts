import { CreateCarritoDto, UpdateCarritoDto } from '../dtos';
import { CarritoEntity } from '../entities/carrito.entity';

export abstract class CarritoRepository {

  abstract create(createCarritoDto: CreateCarritoDto): Promise<CarritoEntity>;

  abstract getAll(): Promise<CarritoEntity[]>;

  abstract findById(id: number): Promise<CarritoEntity>;

  abstract updateById(updateCarritoDto: UpdateCarritoDto): Promise<CarritoEntity>;

  abstract deleteById(id: number): Promise<CarritoEntity>;

}
