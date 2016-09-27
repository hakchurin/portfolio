
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';




Backbone.history.start();


ReactDOM.render(router  , document.getElementById('container'));
