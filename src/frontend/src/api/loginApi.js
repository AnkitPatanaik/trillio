import client from "./trillioClient";

class LoginApi {
  static login(credentials) {
    return client.post("users/login", credentials);
  }
}

export default LoginApi;
