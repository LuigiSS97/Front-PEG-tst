import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";
  import PEGMyactivities from './PEG/Myactivities/Myactivities'
 
  const Root = () => {
      return (
          <Router>
              <Switch>
                  <Route path="/" component={PEGMyactivities}/>
              </Switch>
          </Router>
      )
  }
  export default Root;