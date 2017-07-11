
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';




Backbone.history.start();


ReactDOM.render(router, document.getElementById('container'));


var authorization = btoa('kid_r1EaDaz1e:dc3007bfc8d8498fa1397c157a481d18');

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
   xhrAjax.setRequestHeader('Authorization', 'Basic ' + authorization);
});
