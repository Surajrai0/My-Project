import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElement from './myGreeting';
import GreetingElementWithProps from './myGreetingWithPros';
import AppColor from './AppBackgroundcolor';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <GreetingElementWithProps
      message="Hey guys.Its Monday"/>
    <GreetingElementWithProps
      message="Hey guys.Its Tuesday"/>
    <GreetingElementWithProps
      message="Hey guys.Its Wednesday"/>
    <GreetingElementWithProps
      message="Hey guys.Its Thursday"/>
    <GreetingElementWithProps
      message="Hey guys.Its Friday"/>
    <GreetingElementWithProps
      message="Hey guys.Its Saturday"/>
    <GreetingElementWithProps message="Hey guys.Its Sunday"/>
 
 
<AppColor heading="First Element" lbl ="Name:" color ="green"/>
<AppColor heading="Second Element" lbl ="Name:" color ="blue"/>
<AppColor heading="Third Element" lbl ="Name:" color ="Yellow"/>
     </React.StrictMode>
 
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();