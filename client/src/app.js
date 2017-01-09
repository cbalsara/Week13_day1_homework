var React = require('react');
var ReactDOM = require('react-dom');
var MovieList = require('./components/MovieList.jsx');

window.onload = function(){
  ReactDOM.render(
    <MovieList title= "UK Opening This Week">,
    document.getElementById('app')
  );
}
