import { EnvioEntity } from '../../entities/envio.entity';
import { EnvioRepository } from '../../repositories/envio.repository';

export interface GetEnvioUseCase {
  execute(id: number): Promise<EnvioEntity>;
}

export class GetEnvio implements GetEnvioUseCase {
  
  constructor(
    private readonly repository: EnvioRepository,
  ) {}
  
  execute(id: number): Promise<EnvioEntity> {
    return this.repository.findById(id);
  }
}
