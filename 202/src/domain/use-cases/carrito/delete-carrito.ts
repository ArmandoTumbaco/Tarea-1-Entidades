import { CarritoEntity } from '../../entities/carrito.entity';
import { CarritoRepository } from '../../repositories/carrito.repository';

export interface DeleteCarritoUseCase {
  execute(id: number): Promise<CarritoEntity>;
}

export class DeleteCarrito implements DeleteCarritoUseCase {
  
  constructor(
    private readonly repository: CarritoRepository,
  ) {}
  
  execute(id: number): Promise<CarritoEntity> {
    return this.repository.deleteById(id);
  }
}
