var React = require('react');

var Movie = React.createClass({
  render: function(){
    return(
      <div className='movie-title'>
      <h4 className='movie-url'>
        {this.props.url}
        </h4>
        <p>{this.props.children}</p>
      </div>
      )
    }
});
module.exports = Movie;