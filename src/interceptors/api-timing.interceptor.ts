import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const apiTimingInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const startTime = performance.now(); // זמן תחילת הבקשה

  return next(req).pipe(
    tap({
      next: () => {
        const duration = performance.now() - startTime;
        console.log(`API Call to ${req.url} took ${duration.toFixed(2)} ms`);
      },
      error: () => {
        const duration = performance.now() - startTime;
        console.error(`API Call to ${req.url} failed after ${duration.toFixed(2)} ms`);
      }
    })
  );
};

