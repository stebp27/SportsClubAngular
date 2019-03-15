import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Reservation } from '../Reservation';
import { FieldService } from 'src/app/field/field.service';
import { IField } from 'src/app/field/IField';
import { Sports } from '../IReservation';


function timeEndGreater(c: AbstractControl): { [key: string]: boolean } | null {
  const timeStartControl = c.get('timeStart');
  const timeEndControl = c.get('timeEnd');

  if (timeStartControl.pristine || timeEndControl.pristine) {
    return null;
  }

  if (timeStartControl.value < timeEndControl.value) {
    return null;
  }
  return { 'endGreater': true };
  
}@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.css']
})
export class ReservationAddComponent implements OnInit {
  reservationForm: FormGroup;
  reservation = new Reservation();
  fields: IField[] = [];
  firstField: IField;
  get sports() {return Sports};
  allFields: IField[];

  constructor(private fb: FormBuilder, private fieldService: FieldService) { }

  ngOnInit() {
      this.fieldService.getFields().subscribe(
        fields => {
          this.allFields = fields;
        })
      this.reservationForm = this.fb.group({
      userFirstName :[ '', [Validators.required]],
      userLastName :[ '', [Validators.required]],
      sport :[''],
      field :[ '', [Validators.required]],
      date :[ '', [Validators.required]],
      timeGroup:this.fb.group({
        timeStart :[ '', [Validators.required]],
        timeEnd :[ '', [Validators.required]],
      }, {validator:timeEndGreater}),
  
      isDouble:[false],
      isChallenge:[false]
      })
      /*this.reservationForm.get('sport').valueChanges.subscribe(
        value => this.setNotification(value)
      );*/
    }

    save() {
      console.log(this.reservationForm);
      console.log('Saved: ' + JSON.stringify(this.reservationForm.value));
      /*if(this.reservationForm.valid){
        this.fi
      }*/
    }

    onSportChange(selection : Sports)
    {
      this.fields = this.allFields.filter(f=> f.sport == selection);
    }
}
