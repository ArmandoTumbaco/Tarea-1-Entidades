import { CreateEnvioDto, EnvioDatasource, EnvioEntity, EnvioRepository, UpdateEnvioDto } from '../../domain';

export class EnvioRepositoryImpl implements EnvioRepository {

  constructor(
    private readonly datasource: EnvioDatasource,
  ) { }

  create(createEnvioDto: CreateEnvioDto): Promise<EnvioEntity> {
    return this.datasource.create(createEnvioDto);
  }

  getAll(): Promise<EnvioEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<EnvioEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateEnvioDto: UpdateEnvioDto): Promise<EnvioEntity> {
    return this.datasource.updateById(updateEnvioDto);
  }

  deleteById(id: number): Promise<EnvioEntity> {
    return this.datasource.deleteById(id);
  }
}
