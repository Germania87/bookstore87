class AuthorizeNotFoundException {
  constructor() {
    this.message = "Authentication is required";
    this.code = 503;
  }
}

export { AuthorizeNotFoundException };
