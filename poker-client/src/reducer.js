import { combineReducers } from 'redux'
import { sessionReducer } from './components/Session'

var reducer = function(state = {}, action) {
  switch (action.type) {
    case 'SET_STATE':
      return action.state;
    case 'MENU_TOGGLE':
    return Object.assign({}, state, {
        menuState: {open: !state.menuState.open }
      });
    case 'SET_APP_BAR':
    return Object.assign({}, state, {
        appBar: {title: action.title, rightBtn: action.rightBtn }
      });
    case 'APP_BAR_BTN':
    return Object.assign({}, state, {
        appBarAction: action.action
      });
    case 'READ_SESSION':  
    return Object.assign({}, state, {
        sessions: state.sessions.concat(action.session)
      });

  }
  return state;
}

export default combineReducers({
  app:reducer,
  session:sessionReducer
})
