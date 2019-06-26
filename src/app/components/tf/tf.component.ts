import { Component, OnInit } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css']
})
export class TfComponent implements OnInit {
  user = new User("", 0);

  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.user.name + " is " + this.user.age + " years old" );
  }

}
