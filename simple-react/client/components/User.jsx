User = React.createClass({

  mixins:[ReactMeteorData],
  getMeteorData(){
    let data ={};
    data.friends =[];
    data.friends = Friends.find({}).fetch();
    return data;
  },

  render(){

    let imageTest ='';
    imageTest = (
      <img src="http://placehold.it/70x70" className="img-responsive"/>
    )

    var friends = this.data.friends.map(function(result){
      return <Friends key={result._id} name={result.name} />
    })

    return(
      <div className="jumbotron">
        <div className="row">
          <div className="col-sm-2">
            {imageTest}
          </div>
          <div className="col-md-6">
            <b>Usernames friend list:</b>
            {friends}
          </div>
        </div>

      </div>
    )
  }
})
