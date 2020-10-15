import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { FormData } from '../formDetails';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public initialFormData : FormData;

  name = new FormControl();
  email = new FormControl();
  feedback = new FormControl();
  comments = new FormControl();

  constructor(private _formData: FormDataService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._formData.fetchFormData()
      .subscribe(data => {
        this.initialFormData = data;
        this.name.setValue(this.initialFormData.name);
        this.email.setValue(this.initialFormData.email);
        this.feedback.setValue(this.initialFormData.feedback);
        this.comments.setValue(this.initialFormData.comment);
      });
  }

  Submit() {
    this._formData.postFormData(this.name.value, this.email.value, this.feedback.value, this.comments.value)
      .then((msg: string) => {
        this._snackBar.open(msg, "", {
          duration: 2000,
        });
      });
  }

}
