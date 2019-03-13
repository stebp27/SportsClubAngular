import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { ChallengeDetailGuard } from './challenge-detail/challenge-detail.guard';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'challenge', component: ChallengeListComponent },
      { path: 'challenge/:id', canActivate: [ChallengeDetailGuard], component: ChallengeDetailComponent }
    ]),
  ],
  declarations: [ ChallengeListComponent, ChallengeDetailComponent],
  providers: [],
  bootstrap: [ChallengeListComponent]
})
export class ChallengeModule { }
