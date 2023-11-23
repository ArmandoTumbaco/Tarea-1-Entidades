import { Router } from 'express';
import { OpinionClientesController } from './controller';
import { OpinionClienteDatasourceImpl } from '../../infrastructure/datasource/opinioncliente.datasource.impl';
import { OpinionClienteRepositoryImpl } from '../../infrastructure/repositories/opinioncliente.repository.impl';

export class OpinionClienteRoutes {

  static get routes(): Router {
    const router = Router();
    const datasource = new OpinionClienteDatasourceImpl();
    const opinionClienteRepository = new OpinionClienteRepositoryImpl(datasource);
    const opinionClienteController = new OpinionClientesController(opinionClienteRepository);

    router.get('/', opinionClienteController.getOpinionClientes);
    router.get('/:id', opinionClienteController.getOpinionClienteById);

    router.post('/', opinionClienteController.createOpinionCliente);
    router.put('/:id', opinionClienteController.updateOpinionCliente);
    router.delete('/:id', opinionClienteController.deleteOpinionCliente);

    return router;
  }
}
