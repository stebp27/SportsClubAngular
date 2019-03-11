import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldModule } from './field/field.module';
import { FieldListComponent } from './field/field-list/field-list.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    FieldModule,
    UserModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
