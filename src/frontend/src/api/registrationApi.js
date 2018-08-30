import client from "./trillioClient";

class RegistrationApi {
  static register(credentials) {
    return client.post("users/create", credentials);
  }
}

export default RegistrationApi;
