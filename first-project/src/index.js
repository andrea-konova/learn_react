import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTrie} from "./render";
import state from "./redux/state";

rerenderEntireTrie(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
