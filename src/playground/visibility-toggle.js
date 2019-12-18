console.log('visibility-toggle.js is running')

const app = {
  title: 'Visibility Toggle',
  details: 'Here are some details',
  showDetails: false
}

const onToggle = () => {
  app.showDetails = !app.showDetails;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onToggle}>
        {app.showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {app.showDetails && <p>{app.details}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderApp();
