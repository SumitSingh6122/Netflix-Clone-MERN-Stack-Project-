import React from 'react'
import Header from './header';
import Login from './login';
import Footer from './footer';

 function Body() {
  return (
    <div><div className="container">
        <Header/>
        <div className="main"></div></div>
        <Login/>
        <div><Footer/></div>
        </div>
        
  )
}
export default Body;
