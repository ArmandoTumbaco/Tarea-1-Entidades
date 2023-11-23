import { CreateCarritoDto } from '../../dtos';
import { CarritoEntity } from '../../entities/carrito.entity';
import { CarritoRepository } from '../../repositories/carrito.repository';

export interface CreateCarritoUseCase {
  execute(dto: CreateCarritoDto): Promise<CarritoEntity>;
}

export class CreateCarrito implements CreateCarritoUseCase {
  
  constructor(
    private readonly repository: CarritoRepository,
  ) {}
  
  execute(dto: CreateCarritoDto): Promise<CarritoEntity> {
    return this.repository.create(dto);
  }
}
