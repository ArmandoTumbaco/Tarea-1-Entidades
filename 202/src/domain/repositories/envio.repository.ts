import { CreateEnvioDto, UpdateEnvioDto } from '../dtos';
import { EnvioEntity } from '../entities/envio.entity';

export abstract class EnvioRepository {

  abstract create(createEnvioDto: CreateEnvioDto): Promise<EnvioEntity>;

  abstract getAll(): Promise<EnvioEntity[]>;

  abstract findById(id: number): Promise<EnvioEntity>;
  
  abstract updateById(updateEnvioDto: UpdateEnvioDto): Promise<EnvioEntity>;

  abstract deleteById(id: number): Promise<EnvioEntity>;

}
