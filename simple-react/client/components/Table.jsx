Table = React.createClass({
  render(){
    return(
      <div className="container">
        <table>
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.row} </td>
            <td> Row 1.3</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td> Row 2.2 </td>
            <td> Row 2.3</td>
          </tr>
        </table>
      </div>
    )
  }
})
