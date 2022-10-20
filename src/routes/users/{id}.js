import UserController from "../../controllers/users.controllers";
import authenticate from "../../middlewares/authentication";

const controller = new UserController();

// localhost:8000/users/:id
export default (express) => ({
  middleware: [authenticate],
  get: (request, response) => controller.getById(request, response),
  put: (request, response) => controller.updateRecord(request, response),
  delete: (request, response) => controller.deleteRecord(request, response),
});
