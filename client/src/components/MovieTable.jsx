var React = require('react');
var Movie = require('./Movie.jsx');

var MovieTable = React.createClass({
  render: function(){

    var movieComponents = this.props.films.map(function (movieObject){
      return (
        <Movie
        name ={movieObject.name}>
        <p>
        {movieObject.url}
        </p>
        <p>
        {movieObject.showTimesURL}
        </p>
        </Movie>)
    });

    return (
      <div className ='movie-list'>
      {movieComponents}
      </div>
    );
  }
});

module.exports = MovieTable;