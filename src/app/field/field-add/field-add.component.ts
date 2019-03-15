import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Field } from '../field';
import { Surfaces } from '../IField';
import { FieldService } from '../field.service';



@Component({
  selector: 'app-field-add',
  templateUrl: './field-add.component.html',
  styleUrls: ['./field-add.component.css']
})
export class FieldAddComponent implements OnInit {
  fieldForm: FormGroup;
  field= new Field();
  get surfaces() {return Surfaces};

  constructor(private fb: FormBuilder, private fieldService : FieldService) { }

  
  ngOnInit() {
    this.fieldForm = this.fb.group({
      name :[ '', [Validators.required]],
      surface :[ ''],
      price :[ '', [Validators.required]]
      })
  }

  saveField(){
    console.log(this.fieldForm);
    console.log('Saved: '+ JSON.stringify(this.fieldForm.value));
    if (this.fieldForm.valid) {
      this.field= this.fieldForm.value;
    }
    this.fieldService.addField(this.field).subscribe();
}

}
