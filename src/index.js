import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';

function Main(){
    return(
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }

ReactDOM.render(<Main/>,document.getElementById('root'));

