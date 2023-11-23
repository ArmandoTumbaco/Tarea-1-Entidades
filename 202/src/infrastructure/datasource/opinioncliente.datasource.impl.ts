import { prisma } from '../../data/postgres';
import { CreateOpinionClienteDto, OpinionClienteDatasource, OpinionClienteEntity, UpdateOpinionClienteDto } from '../../domain';

export class OpinionClienteDatasourceImpl implements OpinionClienteDatasource {

  async create(createOpinionClienteDto: CreateOpinionClienteDto): Promise<OpinionClienteEntity> {
    const opinionCliente = await prisma.opinionCliente.create({
      data: createOpinionClienteDto!
    });

    return OpinionClienteEntity.fromObject(opinionCliente);
  }

  async getAll(): Promise<OpinionClienteEntity[]> {
    const opinionClientes = await prisma.opinionCliente.findMany();
    return opinionClientes.map((opinionCliente: { [key: string]: any; }) => OpinionClienteEntity.fromObject(opinionCliente));
  }

  async findById(id: number): Promise<OpinionClienteEntity> {
    const opinionCliente = await prisma.opinionCliente.findFirst({
      where: { id }
    });

    if (!opinionCliente) throw `OpinionCliente with id ${id} not found`;
    return OpinionClienteEntity.fromObject(opinionCliente);
  }

  async updateById(updateOpinionClienteDto: UpdateOpinionClienteDto): Promise<OpinionClienteEntity> {
    await this.findById(updateOpinionClienteDto.id);

    const updatedOpinionCliente = await prisma.opinionCliente.update({
      where: { id: updateOpinionClienteDto.id },
      data: updateOpinionClienteDto!.values
    });

    return OpinionClienteEntity.fromObject(updatedOpinionCliente);
  }

  async deleteById(id: number): Promise<OpinionClienteEntity> {
    await this.findById(id);
    const deleted = await prisma.opinionCliente.delete({
      where: { id }
    });

    return OpinionClienteEntity.fromObject(deleted);
  }
}
