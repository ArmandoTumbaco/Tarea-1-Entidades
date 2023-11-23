import { EnvioEntity } from '../../entities/envio.entity';
import { EnvioRepository } from '../../repositories/envio.repository';

export interface GetEnviosUseCase {
  execute(): Promise<EnvioEntity[]>;
}

export class GetEnvios implements GetEnviosUseCase {
  
  constructor(
    private readonly repository: EnvioRepository,
  ) {}
  
  execute(): Promise<EnvioEntity[]> {
    return this.repository.getAll();
  }
}
