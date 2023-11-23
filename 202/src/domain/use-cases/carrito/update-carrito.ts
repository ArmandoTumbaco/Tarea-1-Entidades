import { UpdateCarritoDto } from '../../dtos';
import { CarritoEntity } from '../../entities/carrito.entity';
import { CarritoRepository } from '../../repositories/carrito.repository';

export interface UpdateCarritoUseCase {
  execute(dto: UpdateCarritoDto): Promise<CarritoEntity>;
}

export class UpdateCarrito implements UpdateCarritoUseCase {
  
  constructor(
    private readonly repository: CarritoRepository,
  ) {}
  
  execute(dto: UpdateCarritoDto): Promise<CarritoEntity> {
    return this.repository.updateById(dto);
  }
}

