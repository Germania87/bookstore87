import { users, roles } from "../models";
import { UserNotFoundException } from "../exceptions/users.exceptions";

class UserController {
  constructor() {
    this.model = users;
  }

  async all(request, response) {
    try {
      const records = await this.model.findAll({
        attributes: {
          exclude: ["password", "role_id"],
        },
        order: [["id", "ASC"]],
        include: roles,
      });
      return response.status(200).json(records);
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  // Metodo para crear un usuario
  async createRecord(request, response) {
    try {
      const { name, last_name, username, email, password } = request.body;

      const record = this.model.build({
        name,
        last_name,
        username,
        email,
        password,
      });

      await record.hashPassword();
      await record.save();

      return response.status(201).json(record);
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  async getById(request, response) {
    try {
      const { id } = request.params;

      const record = await this.model.findOne({
        where: {
          id,
        },
      });

      if (!record) throw new UserNotFoundException();

      return response.status(200).json(record);
    } catch (error) {
      return response.status(error?.code || 500).json({
        message: error?.message || "GetById error",
      });
    }
  }

  async updateRecord(request, response) {
    try {
      const { id } = request.params;
      const { name, last_name, username, email } = request.body;

      const record = await this.model.update(
        {
          name,
          last_name,
          username,
          email,
        },
        {
          where: {
            id,
          },
        }
      );

      if (!record) throw new UserNotFoundException();

      return response.status(200).json({
        message: `User updated -> ID: ${id}`,
      });
    } catch (error) {
      return response.status(error?.code || 500).json({
        message: error?.message || "Update error",
      });
    }
  }

  async deleteRecord(request, response) {
    try {
      const { id } = request.params;

      const record = await this.model.findByPk(id);

      if (!record) throw new UserNotFoundException();

      record.status = false;
      await record.save();

      return response.status(200).json({
        message: `User Disable -> ID: ${id}`,
      });
    } catch (error) {
      return response.status(error?.code || 500).json({
        message: error?.message || "Delete error",
      });
    }
  }
}

export default UserController;
