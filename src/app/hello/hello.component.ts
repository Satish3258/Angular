import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  // template: 'hi Satish, welcome to course - {{courseName}}', // inline template
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {


  courseName: string = "Angular";
userInput: any;

  changeName() {
    this.courseName = "Spring...";
  }
  year:number = 23;
  
  //  userInput:number |;
  getBirthYear(){
    this.year = 2024 - 12;
    console.log(this.year);
  }

}

