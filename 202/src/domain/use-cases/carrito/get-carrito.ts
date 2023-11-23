import { CarritoEntity } from '../../entities/carrito.entity';
import { CarritoRepository } from '../../repositories/carrito.repository';

export interface GetCarritoUseCase {
  execute(id: number): Promise<CarritoEntity>;
}

export class GetCarrito implements GetCarritoUseCase {
  
  constructor(
    private readonly repository: CarritoRepository,
  ) {}
  
  execute(id: number): Promise<CarritoEntity> {
    return this.repository.findById(id);
  }
}
