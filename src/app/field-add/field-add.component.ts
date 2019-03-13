import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Field } from '../field/field';

@Component({
  selector: 'app-field-add',
  templateUrl: './field-add.component.html',
  styleUrls: ['./field-add.component.css']
})
export class FieldAddComponent implements OnInit {

  field= new Field();
  constructor() { }

  ngOnInit() {
  }

  save(fieldForm: NgForm){
    console.log(fieldForm.form);
    console.log('Saved: '+ JSON.stringify(fieldForm.value));
}

}
