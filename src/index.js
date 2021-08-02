//import * as serviceWorker from './serviceWorker'

import store from './redux/state';




import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker'
import App from './App';
//import state from './redux/state';


//addPost('kis-kis')
let rerenderEntireTree = (state) =>{
ReactDOM.render(
<BrowserRouter>
<App state={state} App dispatch={store.dispatch.bind(store)}/>
</BrowserRouter>, document.getElementById('root')
);
}

rerenderEntireTree (store.getState());

store.subscribe (rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
/*import reportWebVitals from './reportWebVitals';
//import './index.css';
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
let dialogsData = [
  { id: 1, name: 'Sergey' },
  { id: 2, name: 'Dima' },
  { id: 3, name: 'Natasha' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Zina' },
  { id: 6, name: 'Lina' }
]
let messagesData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'How are you' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Thank you' },
  { id: 6, message: 'Ulalala' }
]
let postsData = [
  { id: 1,  post: 'Hi, how are you', likesCount:'10' },
  { id: 2, post: 'My first message', likesCount:'12' },
  { id: 3, post: 'How are you', likesCount:'8' },
  { id: 4, post: 'Hi-fi', likesCount:'11' },
  { id: 5, post: 'Foll good icr', likesCount:'16' },
  { id: 6, post: 'First', likesCount:'7' }
]*/


