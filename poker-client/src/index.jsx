import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Xpoker from './components/Xpoker';
import {Home} from './components/Home';
import {AddSession} from './components/AddSession';
import {Session} from './components/Session';
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
    },
    sessions:[]
  }
});

const fireBaseRef = new Firebase("https://burning-torch-5453.firebaseio.com/sessions");

const onChildAdded = fireBaseRef.on("child_added", function(snapshot) {
  var session = snapshot.val();
  session.key = snapshot.key();
  store.dispatch({type:"READ_SESSION",session:session});
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


const routes = <Route component={Xpoker}>
  <Route path="/" component={Home} />
  <Route path="/session" component={AddSession} />
  <Route path="/:session_key" component={Session} />
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
