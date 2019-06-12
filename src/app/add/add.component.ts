import { Component, OnInit } from '@angular/core';
import { add } from './../model/add';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public form: boolean = false;
  public table: boolean = true;
  public user: add;
  public id;
 public index:number = -1; 

  public fieldArray: Array<add> = [];
  private newAttribute: any = {};



  // userForm = new FormGroup({
  //   email: new FormControl(""),
  //   title: new FormControl("")
  // })
  constructor() { }

  ngOnInit() {
    this.user = {
      email: '',
      title: ''
    }
  }

  add() {
    this.form = true;
    this.table = false;
  }

  onSubmit() {

if(this.index === -1){
  this.fieldArray.push(this.user);
  this.user =  <add>{};
} 
else{
  console.log('xxxxxxx hhhhh', this.index);
  this.fieldArray.splice(this.index, 1, this.user);
  this.user =  <add>{};
this.index = -1;

  
}
    this.table = true;
    console.log(this.fieldArray, 'hello');

    // if (!this.id && this.id != 0) {
    //   alert(1);
    //   this.form
    //   this.fieldArray.push(this.user)
    //   this.user = {
    //     email: '',
    //     title: ''
    //   }
    // } else {
    //   alert(2)
    //   this.fieldArray.splice(this.id, 1, this.user)
    //   this.user = {
    //     email: '',
    //     title: ''
    //   }
    //   this.id = null;
    // }
    console.log(this.fieldArray);
  }
  delete(index) {
    this.fieldArray.splice(index, 1)
  }
  Edit(index, ind) {
    this.index = ind;
    this.id = ind;
    console.log('%dgfdsfgdfsg ', this.id);
    this.table = false;
    this.user = {
      email: index.email,
      title: index.title
    }
    this.form = true;

  }
}
