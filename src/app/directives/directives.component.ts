import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
//------------ngIf------------------
  isAuthenticated !: boolean;
  submitted = false;
  userName !: string;

  onSubmit(name: string, password: string){
    this.submitted = true;
    this.userName = name;
    if(name ==  password ){
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
    }
  }
  
  //------------ngFor------------------
  courses:any[] = [
    {id :1, name: "Angular"},
    {id :2, name: "java"},
    {id :3, name: "Spring"},
  ]


  //--------------ngSwitch----------------
  choice = 0;

  nextChoice(){
    this.choice++;
  }
}
