import { Component, OnInit } from '@angular/core';
import { IField } from '../IField';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldService } from '../field.service';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {
  errorMessage = '';
  field: IField | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fieldService: FieldService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getField(id);
    }
  }

  getField(id: number) {
    this.fieldService.getField(id).subscribe(
      field => this.field = field,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/field']);
  }
}
