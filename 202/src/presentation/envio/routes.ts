import { Router } from 'express';
import { EnviosController } from './controller';
import { EnvioDatasourceImpl } from '../../infrastructure/datasource/envio.datasource.impl';
import { EnvioRepositoryImpl } from '../../infrastructure/repositories/envio.repository.impl';
export class EnvioRoutes {

  static get routes(): Router {
    const router = Router();

    const datasource = new EnvioDatasourceImpl();
    const envioRepository = new EnvioRepositoryImpl(datasource);
    const envioController = new EnviosController(envioRepository);

    router.get('/', envioController.getEnvios);
    router.get('/:id', envioController.getEnvioById);

    router.post('/', envioController.createEnvio);
    router.put('/:id', envioController.updateEnvio);
    router.delete('/:id', envioController.deleteEnvio);

    return router;
  }
}
