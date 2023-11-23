import { OpinionClienteEntity } from '../../entities/opinioncliente.entity';
import { OpinionClienteRepository } from '../../repositories/opinioncliente.repository';

export interface GetOpinionClientesUseCase {
  execute(): Promise<OpinionClienteEntity[]>;
}

export class GetOpinionClientes implements GetOpinionClientesUseCase {
  
  constructor(
    private readonly repository: OpinionClienteRepository,
  ) {}
  
  execute(): Promise<OpinionClienteEntity[]> {
    return this.repository.getAll();
  }
}
