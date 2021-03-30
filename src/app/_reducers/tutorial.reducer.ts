import { Action } from '@ngrx/store';
import { Tutorial} from '../_model/tutorial.model';
import * as TutorialActions from '../_actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      return state.filter((item, i) => i !== action.payload);
    default:
      return state;
  }
}
