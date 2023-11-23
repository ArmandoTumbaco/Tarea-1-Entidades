import { CreateOpinionClienteDto, UpdateOpinionClienteDto } from '../dtos';
import { OpinionClienteEntity } from '../entities/opinioncliente.entity';

export abstract class OpinionClienteDatasource {

  abstract create(createOpinionClienteDto: CreateOpinionClienteDto): Promise<OpinionClienteEntity>;

  abstract getAll(): Promise<OpinionClienteEntity[]>;

  abstract findById(id: number): Promise<OpinionClienteEntity>;

  abstract updateById(updateOpinionClienteDto: UpdateOpinionClienteDto): Promise<OpinionClienteEntity>;

  abstract deleteById(id: number): Promise<OpinionClienteEntity>;

}
