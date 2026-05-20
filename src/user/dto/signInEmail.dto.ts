// =========== Imports ===========
import * as v from 'valibot';
import { ApiProperty } from '@nestjs/swagger';

// =========== Schema ===========
export const SignInEmailSchema = v.object({
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
});

// =========== Type ===========
export type SignInEmailDto = v.InferOutput<typeof SignInEmailSchema>;

// =========== DTO ===========
export class SignInEmailBodyDto {
  @ApiProperty({ format: 'email', maxLength: 50 })
  email: string;

  @ApiProperty({ minLength: 8, maxLength: 16 })
  password: string;
}
