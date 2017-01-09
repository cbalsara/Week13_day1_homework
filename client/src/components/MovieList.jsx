var React = require('react');
var MovieList = React.createClass({


propTypes:{
  title: React.propTypes.string
}

render: function(){
  return(
    <div className='movie-box'>
    <h2> {this.props.title} </h2>
    );
  }
});

module.exports = MovieList;