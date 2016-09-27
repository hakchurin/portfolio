import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import home from './home';
import nav from './nav';
import projects from './projects';



  const router = (
      <Router history = {browserHistory}>
      <Route path = "/" component = {home}/>
      <Route path = "/home" component = {home}/>
      <Route path = "/nav" component = {nav}/>
      <Route path = "/projects" component = {projects}/>



    </Router>

  )

export default router;
