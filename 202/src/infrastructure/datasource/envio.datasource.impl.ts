import { prisma } from '../../data/postgres';
import { CreateEnvioDto, EnvioDatasource, EnvioEntity, UpdateEnvioDto } from '../../domain';

export class EnvioDatasourceImpl implements EnvioDatasource {

  async create(createEnvioDto: CreateEnvioDto): Promise<EnvioEntity> {
    const envio = await prisma.envio.create({
      data: createEnvioDto,
    });

    return EnvioEntity.fromObject(envio);
  }

  async getAll(): Promise<EnvioEntity[]> {
    const envios = await prisma.envio.findMany();
    return envios.map((envio: { [key: string]: any; }) => EnvioEntity.fromObject(envio));
  }

  async findById(id: number): Promise<EnvioEntity> {
    const envio = await prisma.envio.findFirst({
      where: { id },
    });

    if (!envio) throw `Envio with id ${id} not found`;
    return EnvioEntity.fromObject(envio);
  }

  async updateById(updateEnvioDto: UpdateEnvioDto): Promise<EnvioEntity> {
    await this.findById(updateEnvioDto.id);

    const updatedEnvio = await prisma.envio.update({
      where: { id: updateEnvioDto.id },
      data: updateEnvioDto.values,
    });

    return EnvioEntity.fromObject(updatedEnvio);
  }

  async deleteById(id: number): Promise<EnvioEntity> {
    await this.findById(id);
    const deleted = await prisma.envio.delete({
      where: { id },
    });

    return EnvioEntity.fromObject(deleted);
  }
}
