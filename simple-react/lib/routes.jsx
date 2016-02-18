FlowRouter.route("/", {
  name: "Home",
  action(params){
    renderMainLayout(<Home />);
  }
});

FlowRouter.route("/login",{
  name:"Login",
  action(params){
    renderMainLayout(<UserLogin />);
  }
});

FlowRouter.route("/about",{
  name:"About",
  action(params){
    renderMainLayout(<About />);
  }
})


function renderMainLayout(component){
  ReactLayout.render(MainLayout,{
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}
