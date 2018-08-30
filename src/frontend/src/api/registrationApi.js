import client from './trillioClient';

class RegistrationApi {
  static register(credentials) {
    console.log('registerUser');
    return client
      .post('users/create', credentials);
  }
}

export default RegistrationApi;