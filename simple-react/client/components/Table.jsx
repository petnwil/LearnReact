Table = React.createClass({
  render(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.name} Row1.1</td>
              <td>{this.props.row} Row 1.2 </td>
              <td> Row 1.3</td>
            </tr>
            <tr>
              <td>Row 2</td>
              <td> Row 2.2 </td>
              <td> Row 2.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})
