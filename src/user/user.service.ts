// =========== Imports ============
import { Injectable, ConflictException } from '@nestjs/common';
import { UserRepository } from './user.repository';

// =========== Service ============
@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  // CREATE
  async signUpEmail(email: string, password: string, name: string) {
    const existEmail = await this.userRepository.existEmail(email);
    if (existEmail)
      throw new ConflictException('El correo electrónico ya existe');
    return this.userRepository.signUpEmail(email, password, name);
  }

  // READ
  async signInEmail(email: string, password: string) {
    return this.userRepository.signInEmail(email, password);
  }

  async signOut(req: { headers: Headers }) {
    return this.userRepository.signOut(req);
  }

  async changePassword() {
    return this.userRepository.changePassword();
  }

  // UPDATE
  // Async...

  // DELETE
  // Async...
}
