import { tassign } from 'tassign'; 
import { ADD_TEST1, ADD_TEST2 } from './actions';
import { Test1Entry } from './test1.entry';
import { Test2Entry } from './test2.entry';

export interface IAppState {
  test1Entry: Test1Entry | null;
  test1LastUpdate: Date; 
  test2Entry: Test2Entry | null;
  test2LastUpdate: Date; 
}

export const INITIAL_STATE: IAppState = { 
  test1Entry: new Test1Entry('','',''),
  test1LastUpdate: null,
  test2Entry: new Test2Entry('','',''),
  test2LastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_TEST1:
      var newTest1Entry = new Test1Entry(action.text1, action.text2, action.text3);
      console.log('rootReducer - newTest1Entry: ' + newTest1Entry);
      return tassign(
        state,
        {
          test1Entry: newTest1Entry,
          test1LastUpdate: new Date()
        }
      );
    case ADD_TEST2:
      var newTest2Entry = new Test2Entry(action.text1, action.text2, action.text3);
      console.log('rootReducer - newTest2Entry: ' + newTest2Entry);
      return tassign(
        state,
        {
          test2Entry: newTest2Entry,
          test2LastUpdate: new Date()
        }
      );
  }
  return state; 
}