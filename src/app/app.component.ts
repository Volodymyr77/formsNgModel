import { Component } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tryToPush';

  user: User = {
    name : 'vasyl', age : 31
  };

  // getTitle(yyy: HTMLInputElement): void {
  //   console.log(this.title);
  //   console.log(yyy);
  //   console.log(yyy.value);

  // getTitle(yyy: NgModel): void {
  //   console.log(yyy);
  //
  // }


  // action(name: NgModel, age: NgModel) : void {
action(form: NgForm) : void {
  console.log(form);
  }
}
