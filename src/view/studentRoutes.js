import express from 'express';
import studentController from '../../src/controller/studenController'
// routes para utilizar las rutas de lo verbos 
const routes = express.Router();


// metodo de llamar toda la consulta 
routes.get('/' ,studentController.searchAll);

// metodos de consulta por id
routes.get('/:id',studentController.searchId);
// metodo de ingreso de estudiante 
routes.post('/', studentController.add);
// metodo de actulizar estudiante id
routes.put('/:id',studentController.update);
// metodo de borrado por id 
routes.delete('/:id',studentController.deleteStudent);

export default routes;