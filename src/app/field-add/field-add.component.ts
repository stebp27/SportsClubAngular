import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Field, Surfaces } from '../field/field';
import { IField } from '../field/IField';
import { FieldService } from '../field/field.service';

@Component({
  selector: 'app-field-add',
  templateUrl: './field-add.component.html',
  styleUrls: ['./field-add.component.css']
})
export class FieldAddComponent implements OnInit {

  field= new Field();
  get surfaces() {return Surfaces}
  fieldForm: NgForm;
  fieldService : FieldService;
  constructor() { }

  
  ngOnInit() {
  }

  save(fieldForm: NgForm){
    console.log(fieldForm.form);
    console.log('Saved: '+ JSON.stringify(fieldForm.value));
    this.fieldService.addField(this.field).subscribe();
}

}
