import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './Pages/ArticlePage';
import ArticleDetail from './Pages/ArticleDetail';
import  NotFoundPage from './Pages/NotFoundPage';
import Login from './Pages/Login'
import NavBar from './NavBar'
import React,{useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BlogAdd from './Pages/BlogAdd';
import Footer from './Pages/Footer';
function App() {
  const auth = getAuth();
  const [User, setUser] = useState(null);
  useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
          if(user){
              setUser(user)
              console.log('i am at useEffect inside app')
          }
          else{
              setUser(null)
              console.log('i am at useEffect but inside the else command')
          }
      })
  },[User,auth])

  return (
    <Router >
    <div className="App">
      <NavBar />
      <div className='container'>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={User? BlogAdd :AboutPage}/> 
          <Route path="/article" component={ArticlePage} exact/> 
          <Route path="/article/:name" component={ArticleDetail}/> 
          <Route path="/login" component={Login}/> 
          <Route path="/" component={Footer} /> 
          <Route component={NotFoundPage}/>    
        </Switch>  
    </div>
    </div>
    </Router>
  );
}

export default App;
