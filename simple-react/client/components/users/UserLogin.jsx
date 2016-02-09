UserLogin = React.createClass({

  onSubmit(e){
    e.preventDefault();

    var self = this;

    var email = $(e.target).find("[name=email]").val();
    var password = e.target.email.value;

    Meteor.loginWithPassword(email, password, function(err){
      if(err){
        console.log("err.reason");
      }else {
        FlowRouter.go('Home');
      }
    })
  },

  render(){
    return(
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h2>Login</h2>

              <form onSubmit={this.onSubmit}>
                <input className="form-control" type="text" name="email" placeholder="Enter email"/>
                <input className="form-control" type="password" name="password" placeholder="Enter password"/>
                <input className="btn btn-primary" type="submit" value="Login"/>
              </form>
            </div>
          </div>
        </div>
    )
  }
});
