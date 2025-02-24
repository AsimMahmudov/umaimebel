namespace AUTH {
  type GetUserResponse = {
    username: string;
    password: string;
    email: string;
  };
  type GetUserRequest = void;
}
