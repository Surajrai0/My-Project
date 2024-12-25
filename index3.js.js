import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './index.css';
import App from './App';
import EmojeeCounter from './EmojiCounter';
ReactDOM.render(
  <React.StrictMode>
   <Counter/>
   <EmojeeCounter pic='Love'/>
   <EmojeeCounter pic='sad'/>
   <EmojeeCounter pic='Like'/>
   <EmojeeCounter pic='happy'/>



   </React.StrictMode>,
  document.getElementById('root')
);