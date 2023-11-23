import { Router } from 'express';

import { EnvioRoutes } from './envio/routes';
import { CarritoRoutes } from './carrito/routes';
import { OpinionClienteRoutes } from './opinioncliente/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/envio', EnvioRoutes.routes );
    router.use('/api/carrito', CarritoRoutes.routes );
    router.use('/api/opinioncliente', OpinionClienteRoutes.routes );
    
    return router;
  }


}

