import { UpdateOpinionClienteDto } from '../../dtos';
import { OpinionClienteEntity } from '../../entities/opinioncliente.entity';
import { OpinionClienteRepository } from '../../repositories/opinioncliente.repository';

export interface UpdateOpinionClienteUseCase {
  execute(dto: UpdateOpinionClienteDto): Promise<OpinionClienteEntity>;
}

export class UpdateOpinionCliente implements UpdateOpinionClienteUseCase {
  
  constructor(
    private readonly repository: OpinionClienteRepository,
  ) {}
  
  execute(dto: UpdateOpinionClienteDto): Promise<OpinionClienteEntity> {
    return this.repository.updateById(dto);
  }
}

