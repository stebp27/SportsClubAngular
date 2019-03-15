import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { UserEditComponent } from './user-edit.component';



@Injectable({
  providedIn: 'root'
})
export class UserEditGuard implements CanDeactivate<UserEditComponent> {
  canDeactivate(component: UserEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.userForm.dirty) {
      const firstName = component.userForm.get('firstName').value || 'New first';
      return confirm(`Navigate away and lose all changes to ${firstName}?`);
    }
    return true;
  }
}