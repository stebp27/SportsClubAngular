import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationDetailGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = +next.url[1].path;
    // const id2 = next.paramMap.get('id');
    // console.log(id2);
    if (isNaN(id) || id < 1) {
      alert('Invalid User Id');
      this.router.navigate(['/reservation']);
      return false;
    }
    return true;
  }
}
