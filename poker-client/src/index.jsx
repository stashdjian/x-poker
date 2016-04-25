import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Xpoker from './components/Xpoker';
import Home from './components/Home';
import Session from './components/Session';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {XAppBar} from './components/XAppBar';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    menuState: {
      open: false
    },
    appBar: {
      title: 'X-Poker',
      rightBtn: false
    }
  }
});


const routes = <Route component={Xpoker}>
  <Route path="/" component={Home} />
  <Route path="/session" component={Session} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <div>
      <XAppBar title="" rightBtn=""></XAppBar>
      <Router history={browserHistory}>{routes}</Router>
    </div>    
  </Provider>,
  document.getElementById('x-poker-app')
);
