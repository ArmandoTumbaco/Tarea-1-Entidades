import { EnvioEntity } from '../../entities/envio.entity';
import { EnvioRepository } from '../../repositories/envio.repository';

export interface DeleteEnvioUseCase {
  execute(id: number): Promise<EnvioEntity>;
}

export class DeleteEnvio implements DeleteEnvioUseCase {
  
  constructor(
    private readonly repository: EnvioRepository,
  ) {}
  
  execute(id: number): Promise<EnvioEntity> {
    return this.repository.deleteById(id);
  }
}
