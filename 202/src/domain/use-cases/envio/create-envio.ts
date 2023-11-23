import { CreateEnvioDto } from '../../dtos';
import { EnvioEntity } from '../../entities/envio.entity';
import { EnvioRepository } from '../../repositories/envio.repository';

export interface CreateEnvioUseCase {
  execute(dto: CreateEnvioDto): Promise<EnvioEntity>;
}

export class CreateEnvio implements CreateEnvioUseCase {
  
  constructor(
    private readonly repository: EnvioRepository,
  ) {}
  
  execute(dto: CreateEnvioDto): Promise<EnvioEntity> {
    return this.repository.create(dto);
  }
}
