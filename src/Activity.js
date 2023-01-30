import * as React from 'react';
import './App.css';
import Nav from './Nav';
import Title from './Title'
import About from './About'
import Get from './Get'
import 'bootstrap/dist/css/bootstrap.min.css'







function Activity() {
  return (
    <div className='App'>
      <div className='hero-section'>
      <Nav />
      <Title />   
      </div>
      <About />
      <Get />
    </div>
  );
}


export default Activity;

