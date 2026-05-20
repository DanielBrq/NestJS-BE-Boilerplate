// =========== Imports ============
import * as v from 'valibot';
import { ApiProperty } from '@nestjs/swagger';

// =========== Schema ============
export const CreateUserSchema = v.object({
  email: v.pipe(
    v.string('El correo debe ser un texto'),
    v.trim(),
    v.toLowerCase(),
    v.email('Formato de correo inválido'),
    v.maxLength(50, 'El correo no puede tener más de 50 caracteres'),
  ),
  password: v.pipe(
    v.string('La contraseña debe ser un texto'),
    v.trim(),
    v.minLength(8, 'La contraseña debe tener al menos 8 caracteres'),
    v.maxLength(16, 'La contraseña no puede tener más de 16 caracteres'),
  ),
  name: v.pipe(
    v.string('El nombre debe ser un texto'),
    v.trim(),
    v.minLength(3, 'El nombre debe tener al menos 3 caracteres'),
    v.maxLength(100, 'El nombre no puede tener más de 100 caracteres'),
  ),
});

// =========== Type ===========
export type CreateUserDto = v.InferOutput<typeof CreateUserSchema>;

// =========== DTO ============
export class CreateUserBodyDto {
  @ApiProperty({ format: 'email', maxLength: 50 })
  email: string;

  @ApiProperty({ minLength: 8, maxLength: 16 })
  password: string;

  @ApiProperty({ minLength: 3, maxLength: 100 })
  name: string;
}
