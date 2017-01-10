var React = require('react');

var Movie = React.createClass({
  render: function(){
    return(
      <div 
      className='movie-url'>
      <p className='movie-title'>
        {this.props.name}
        </p>
        <p 
        className='movie-information'>
        {this.props.children}
        </p>
      </div>
      )
    }
});
module.exports = Movie;