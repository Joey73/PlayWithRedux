import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { IAppState } from '../store'; 
import { ADD_TEST2 } from '../actions';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @select() test1Entry;
  @select() test1LastUpdate; 
  @select() test2Entry;
  @select() test2LastUpdate; 

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  add(input1, input2, input3){
    console.log('input1.value: ' + input1.value);
    console.log('input2.value: ' + input2.value);
    console.log('input3.value: ' + input3.value);
    this.ngRedux.dispatch({ type: ADD_TEST2, text1: input1.value, text2: input2.value, text3: input3.value });
  }
}