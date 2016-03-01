FlowRouter.route("/", {
  name: "Home",
  action(params){
    renderMainLayout(<Home />);
  }
})

FlowRouter.route("/login",{
  name:"Login",
  action(params){
    renderMainLayout(<UserLogin />);
  }
})

FlowRouter.route("/about",{
  name:"About",
  action(params){
    renderMainLayout(<About />);
  }
});

FlowRouter.route("/test",{
  name:"Test",
  action: function(){
    ReactLayout.render(Test,{
      table: <Table />,
      jumbotron: <Jumbotron />
    })
  }
})


function renderMainLayout(component){
  ReactLayout.render(MainLayout,{
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}
