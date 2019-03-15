import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FieldListComponent } from './field-list/field-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FieldDetailComponent } from './field-detail/field-detail.component';
import { FieldDetailGuard } from './field-detail/field-detail.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldAddComponent } from './field-add/field-add.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'field', component: FieldListComponent },
      { path: 'addfield', component: FieldAddComponent},
      { path: 'field/:id', canActivate: [FieldDetailGuard], component: FieldDetailComponent }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ FieldListComponent, FieldDetailComponent, FieldAddComponent],
  providers: []
})
export class FieldModule { }
