import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import vine, { errors } from '@vinejs/vine';
import type { SchemaTypes } from '@vinejs/vine/types';

export class VineValidationPipe implements PipeTransform {
  constructor(private schema: SchemaTypes) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      if (this.schema) {
        return await vine.validate({
          schema: this.schema,
          data: value,
        });
      }

      return value;
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        throw new BadRequestException(error.messages);
      }
      throw new BadRequestException('Validation failed');
    }
  }
}
