import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {
  user = new User("", 0);
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.myForm.controls.name.value + " is " + this.myForm.controls.age.value + " years old" );
  }

}
