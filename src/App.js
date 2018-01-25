import React, {Component} from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Topic from './routes/Topic';
import Pseudo from './routes/Pseudo';
import ErrorPage from './routes/404';
import SideBar from './routes/components/sidebar';
import './assets/css/main.css';

class App extends Component {

  routeHandler = (props) => {
    return <Redirect to="/"/>
  }

  render() {
    return (<div>
      <SideBar/>
      <div className="main-body">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topic}/>
          <Route path="/Pseudo" component={Pseudo}/>
          <Route component={this.routeHandler}/>
        </Switch>
      </div>
    </div>);
  }
}

export default App;
