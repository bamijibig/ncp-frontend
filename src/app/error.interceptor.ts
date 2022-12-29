
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppserviceService } from 'src/app/appservice.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private appserviceService: AppserviceService
    ) {}

  

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          localStorage.removeItem('master.user');
          this.cookieService.delete('ATN');
          this.cookieService.delete('csrftoken');
          this.router.navigateByUrl(`/`);
          this.appserviceService.showNotification(
            'snackbar-danger',
            'An error occured: Unauthorised, Please Login',
            'bottom',
            'center'
          );
          // location.reload();
        }

        const error = err.error.detail || err.error.__all__ || err.error.username || err.statusText;
        
        return throwError(error);
        
        
      })
    );
  }
}
