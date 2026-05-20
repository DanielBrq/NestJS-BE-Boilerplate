import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import * as v from 'valibot';

export class ValibotValidationPipe implements PipeTransform {
  constructor(private schema: v.BaseSchema<any, any, any>) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async transform(value: any, metadata: ArgumentMetadata) {
    if (!this.schema) {
      return value;
    }

    const result = v.safeParse(this.schema, value);
    if (!result.success) {
      const errors = result.issues.map((issue) => ({
        field: issue.path ? issue.path.map((p) => p.key).join('.') : '',
        message: issue.message,
      }));
      throw new BadRequestException(errors);
    }

    return result.output;
  }
}
