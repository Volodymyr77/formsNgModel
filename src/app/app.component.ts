import { Component } from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tryToPush';

  // getTitle(yyy: HTMLInputElement): void {
  //   console.log(this.title);
  //   console.log(yyy);
  //   console.log(yyy.value);

  getTitle(yyy: NgModel): void {
    console.log(yyy);

  }

}
