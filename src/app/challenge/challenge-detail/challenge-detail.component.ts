import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IChallenge } from '../IChallenge';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {
  errorMessage = '';
  challenge: IChallenge | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private challengeService: ChallengeService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getChallenge(id);
    }
  }

  getChallenge(id: number) {
    this.challengeService.getChallenge(id).subscribe(
      challenge => this.challenge = challenge,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/reservation']);
  }
}
