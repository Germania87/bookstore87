class UserNotFoundException {
  constructor() {
    this.message = "User not found";
    this.code = 404;
  }
}

class UserDisableException {
  constructor() {
    this.message = "User is disabled";
    this.code = 501;
  }
}

class UserPasswordIncorrectException {
  constructor() {
    this.message = "Password Incorrect";
    this.code = 501;
  }
}

export {
  UserNotFoundException,
  UserDisableException,
  UserPasswordIncorrectException,
};
