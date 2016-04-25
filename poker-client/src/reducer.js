
export default function(state = {}, action) {
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

  }
  return state;
}
