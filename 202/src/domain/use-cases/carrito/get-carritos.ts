import { CarritoEntity } from '../../entities/carrito.entity';
import { CarritoRepository } from '../../repositories/carrito.repository';

export interface GetCarritosUseCase {
  execute(): Promise<CarritoEntity[]>;
}

export class GetCarritos implements GetCarritosUseCase {
  
  constructor(
    private readonly repository: CarritoRepository,
  ) {}
  
  execute(): Promise<CarritoEntity[]> {
    return this.repository.getAll();
  }
}
