import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'We bomb the ReactJS at the rate of Dimych!', likeCount: '15'},
  {id: 2, message: 'Hello! I am learning ReactJS!', likeCount: '20'},
  {id: 3, message: 'IT-kamsutra the best', likeCount: '99'}
];

let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Anna'},
  {id: 4, name: 'Tima'},
  {id: 5, name: 'Sasha'},
  {id: 6, name: 'Vika'}
];

let messages = [
  {id: 1, message: 'HI'},
  {id: 2, message: 'What you doing?'},
  {id: 3, message: 'I am fine!'},
  {id: 4, message: 'Good bay'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
