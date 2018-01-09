import { tassign } from 'tassign'; 
import { ADD } from './actions';
import { Entry } from './entry';

export interface IAppState {
  entry: Entry | null;
  lastUpdate: Date; 
}

export const INITIAL_STATE: IAppState = { 
  entry: new Entry('','',''),
  lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD:
      var newEntry = new Entry(action.text1, action.text2, action.text3);
      console.log('rootReducer - newEntry: ' + newEntry);
      return tassign(
        state,
        {
          entry: newEntry,
          lastUpdate: new Date()
        }
      );
  }
  return state; 
}