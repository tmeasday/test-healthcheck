MainLayout = React.createClass({
  render() {
    return (
      <div>
        <header><h1>Test APP</h1></header>
        <main>{this.props.content}</main>
        <footer>We love Meteor</footer>
      </div>
    );
  }
});

Home = React.createClass({
  render() {
    return (
      <div>
        <p>This is the home page of our blog</p>
        <p>
          <a href="/hello-world">See Hello World Post</a>
        </p>
      </div>
    );
  }
});

WebApp.connectHandlers.use(function(req, res, next) {
  if (req.headers['user-agent'] === 'Galaxybot/1.0') {
    res.end('');
  } else {
    next();
  }
});

FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <Home/>});
  }
});