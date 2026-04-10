// ======== Imports ============
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

// ======== Interceptor =============
@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(15000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(
            () =>
              new RequestTimeoutException(
                'El tiempo de espera de la solicitud ha expirado.',
              ),
          );
        }
        return throwError(() => err as Error);
      }),
    );
  }
}
