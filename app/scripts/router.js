import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import home from './home';
import nav from './nav';
import projects from './projects';
import projectPage from './projectPage';
import resume from './resume';
import contact from './contact';



  const router = (
      <Router history = {browserHistory}>
      <Route path = "/" component = {home}/>
      <Route path = "/home" component = {home}/>
      <Route path = "/nav" component = {nav}/>
      <Route path = "/contact" component = {contact}/>

      <Route path = "/projects" component = {projects}/>
      <Route path = "/projects/:projectpage" component = {projectPage}/>
      <Route path = "/resume" component = {resume}/>


    </Router>

  )

export default router;


// <Route path = "projects/:snackAttack" component = {snackAttack}/>
// <Route path = "/saveTheBay" component = {stb}/>
