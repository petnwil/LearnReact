Meteor.startup(() => {
  if(Meteor.users.find().count() === 0){
    Accounts.createUser({
       email:"peter@petnwil.com",
       password: "test"
    });
  }
});
