import { CreateOpinionClienteDto, OpinionClienteDatasource, OpinionClienteEntity, OpinionClienteRepository, UpdateOpinionClienteDto } from '../../domain';

export class OpinionClienteRepositoryImpl implements OpinionClienteRepository {

  constructor(
    private readonly datasource: OpinionClienteDatasource,
  ) { }

  create(createOpinionClienteDto: CreateOpinionClienteDto): Promise<OpinionClienteEntity> {
    return this.datasource.create(createOpinionClienteDto);
  }

  getAll(): Promise<OpinionClienteEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<OpinionClienteEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateOpinionClienteDto: UpdateOpinionClienteDto): Promise<OpinionClienteEntity> {
    return this.datasource.updateById(updateOpinionClienteDto);
  }

  deleteById(id: number): Promise<OpinionClienteEntity> {
    return this.datasource.deleteById(id);
  }
}
