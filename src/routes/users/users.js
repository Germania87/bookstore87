import UserController from "../controllers/users.controllers";
import authenticate from "../middlewares/authentication";

const controller = new UserController();

// localhost:8000/users
/**
 * Rutas antiguas (instancia de Router)
 * router.use(authenticate) // Middleware global
 * router.get('/', [authenticate], (request, response) => controller.all(request, response))
 */

/**
 * Rutas nuevas (auto import)
 * post: {
    middleware: authenticate,
    handler: (request, response) => controller.createRecord(request, response),
  },
 */

export default (express) => ({
  middleware: [authenticate],
  get: (request, response) => controller.all(request, response),
  post: (request, response) => controller.createRecord(request, response),
});
