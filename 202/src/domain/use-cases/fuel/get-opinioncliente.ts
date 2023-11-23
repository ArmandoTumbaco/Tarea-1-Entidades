import { OpinionClienteEntity } from '../../entities/opinioncliente.entity';
import { OpinionClienteRepository } from '../../repositories/opinioncliente.repository';

export interface GetOpinionClienteUseCase {
  execute(id: number): Promise<OpinionClienteEntity>;
}

export class GetOpinionCliente implements GetOpinionClienteUseCase {
  
  constructor(
    private readonly repository: OpinionClienteRepository,
  ) {}
  
  execute(id: number): Promise<OpinionClienteEntity> {
    return this.repository.findById(id);
  }
}
