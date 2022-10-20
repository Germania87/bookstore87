import { users } from "../models";
import { jwtSignIn, jwtVerify } from "../helpers/jwt";
import {
  UserNotFoundException,
  UserDisableException,
  UserPasswordIncorrectException,
} from "../exceptions/users.exceptions";

class AuthController {
  constructor() {
    this.model = users;
  }

  async signIn(request, response) {
    try {
      const { username, password } = request.body;

      const record = await this.model.findOne({
        where: {
          username,
        },
      });

      if (!record) throw new UserNotFoundException();
      if (!record.status) throw new UserDisableException();

      const validate = await record.validatePassword(password);
      if (!validate) throw new UserPasswordIncorrectException();

      const authToken = jwtSignIn({ id: record.id });

      return response.status(200).json(authToken);
    } catch (error) {
      return response.status(error?.code || 500).json({
        message: error?.message || "Signin error",
      });
    }
  }

  async refreshToken(request, response) {
    try {
      const { refresh_token } = request.body;
      const payload = jwtVerify(refresh_token);
      const { accessToken } = jwtSignIn({ id: payload.id });
      return response.status(200).json({
        accessToken,
      });
    } catch (error) {
      return response.status(error?.code || 500).json({
        message: error?.message || "RefreshToken error",
      });
    }
  }
}

export default AuthController;
