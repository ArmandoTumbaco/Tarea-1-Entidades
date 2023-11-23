import { Router } from 'express';
import { CarritosController } from './controller';
import { CarritoDatasourceImpl } from '../../infrastructure/datasource/carrito.datasource.impl';
import { CarritoRepositoryImpl } from '../../infrastructure/repositories/carrito.repository.impl';

export class CarritoRoutes {

  static get routes(): Router {
    const router = Router();
    const datasource = new CarritoDatasourceImpl();
    const carritoRepository = new CarritoRepositoryImpl(datasource);
    const carritoController = new CarritosController(carritoRepository);

    router.get('/', carritoController.getCarritos);
    router.get('/:id', carritoController.getCarritoById);

    router.post('/', carritoController.createCarrito);
    router.put('/:id', carritoController.updateCarrito);
    router.delete('/:id', carritoController.deleteCarrito);

    return router;
  }
}
