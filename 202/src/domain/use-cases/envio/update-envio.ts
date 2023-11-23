import { UpdateEnvioDto } from '../../dtos';
import { EnvioEntity } from '../../entities/envio.entity';
import { EnvioRepository } from '../../repositories/envio.repository';

export interface UpdateEnvioUseCase {
  execute(dto: UpdateEnvioDto): Promise<EnvioEntity>;
}

export class UpdateEnvio implements UpdateEnvioUseCase {
  
  constructor(
    private readonly repository: EnvioRepository,
  ) {}
  
  execute(dto: UpdateEnvioDto): Promise<EnvioEntity> {
    return this.repository.updateById(dto);
  }
}
