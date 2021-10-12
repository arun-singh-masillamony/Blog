import React from 'react';
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
function App() {
  return (
    <Router >
    <div className="App">
      <NavBar />
      <div className='container'>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage}/> 
          <Route path="/article" component={ArticlePage} exact/> 
          <Route path="/article/:name" component={ArticleDetail}/> 
          <Route path="/login" component={Login}/> 
          <Route component={NotFoundPage}/>      
        </Switch>  
    </div>
    </div>
    </Router>
  );
}

export default App;
