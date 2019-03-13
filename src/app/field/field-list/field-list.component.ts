import { Component, OnInit } from '@angular/core';
import { IField } from "../IField";
import { FieldService } from '../field.service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css']
})
export class FieldListComponent implements OnInit {
  fields : IField[] = [];
  field : IField;
  errorMessage = '';


  constructor(private fieldService: FieldService) { }

  ngOnInit(): void {
    this.fieldService.getFields().subscribe(
      fields => {
        this.fields = fields;
        this.field = this.fields[0];
      },
      error => this.errorMessage = <any>error

    );
  }
  }
  /*ngOnInit(): void {
    this.fieldService.getFields().subscribe(
      newFields => this.createModel(newFields),
      error => console.log(error))
  }

  public createModel(newFields : IField[]){
    this.fields = newFields; this.field = this.fields[0];
  }*/
