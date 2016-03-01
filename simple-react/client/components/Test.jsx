Test = React.createClass({
  render(){
    return(
      <div>
        {this.props.table}
        {this.props.jumbotron}
        <User />
      </div>
    )
  }
})
