import { CreateCarritoDto, CarritoDatasource, CarritoEntity, CarritoRepository, UpdateCarritoDto } from '../../domain';

export class CarritoRepositoryImpl implements CarritoRepository {

  constructor(
    private readonly datasource: CarritoDatasource,
  ) { }

  create(createCarritoDto: CreateCarritoDto): Promise<CarritoEntity> {
    return this.datasource.create(createCarritoDto);
  }

  getAll(): Promise<CarritoEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<CarritoEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateCarritoDto: UpdateCarritoDto): Promise<CarritoEntity> {
    return this.datasource.updateById(updateCarritoDto);
  }

  deleteById(id: number): Promise<CarritoEntity> {
    return this.datasource.deleteById(id);
  }
}

