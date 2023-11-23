import { OpinionClienteEntity } from '../../entities/opinioncliente.entity';
import { OpinionClienteRepository } from '../../repositories/opinioncliente.repository';

export interface DeleteOpinionClienteUseCase {
  execute(id: number): Promise<OpinionClienteEntity>;
}

export class DeleteOpinionCliente implements DeleteOpinionClienteUseCase {
  
  constructor(
    private readonly repository: OpinionClienteRepository,
  ) {}
  
  execute(id: number): Promise<OpinionClienteEntity> {
    return this.repository.deleteById(id);
  }
}
