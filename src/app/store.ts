import { tassign } from 'tassign'; 
import { ADD_TEST1 } from './actions';
import { Test1Entry } from './test1.entry';

export interface IAppState {
  test1Entry: Test1Entry | null;
  test1LastUpdate: Date; 
}

export const INITIAL_STATE: IAppState = { 
  test1Entry: new Test1Entry('','',''),
  test1LastUpdate: null
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
  }
  return state; 
}