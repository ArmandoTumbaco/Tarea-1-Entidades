import { CreateOpinionClienteDto } from '../../dtos';
import { OpinionClienteEntity } from '../../entities/opinioncliente.entity';
import { OpinionClienteRepository } from '../../repositories/opinioncliente.repository';

export interface CreateOpinionClienteUseCase {
  execute(dto: CreateOpinionClienteDto): Promise<OpinionClienteEntity>;
}

export class CreateOpinionCliente implements CreateOpinionClienteUseCase {
  
  constructor(
    private readonly repository: OpinionClienteRepository,
  ) {}
  
  execute(dto: CreateOpinionClienteDto): Promise<OpinionClienteEntity> {
    return this.repository.create(dto);
  }
}

