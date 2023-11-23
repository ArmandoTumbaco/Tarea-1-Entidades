import { prisma } from '../../data/postgres';
import { CreateCarritoDto, CarritoDatasource, CarritoEntity, UpdateCarritoDto } from '../../domain';

export class CarritoDatasourceImpl implements CarritoDatasource {

  async create(createCarritoDto: CreateCarritoDto): Promise<CarritoEntity> {
    const carrito = await prisma.carrito.create({
      data: createCarritoDto!
    });

    return CarritoEntity.fromObject(carrito);
  }

  async getAll(): Promise<CarritoEntity[]> {
    const carritos = await prisma.carrito.findMany();
    return carritos.map((carrito: { [key: string]: any; }) => CarritoEntity.fromObject(carrito));
  }

  async findById(id: number): Promise<CarritoEntity> {
    const carrito = await prisma.carrito.findFirst({
      where: { id }
    });

    if (!carrito) throw `Carrito with id ${id} not found`;
    return CarritoEntity.fromObject(carrito);
  }

  async updateById(updateCarritoDto: UpdateCarritoDto): Promise<CarritoEntity> {
    await this.findById(updateCarritoDto.id);

    const updatedCarrito = await prisma.carrito.update({
      where: { id: updateCarritoDto.id },
      data: updateCarritoDto!.values
    });

    return CarritoEntity.fromObject(updatedCarrito);
  }

  async deleteById(id: number): Promise<CarritoEntity> {
    await this.findById(id);
    const deleted = await prisma.carrito.delete({
      where: { id }
    });

    return CarritoEntity.fromObject(deleted);
  }
}
