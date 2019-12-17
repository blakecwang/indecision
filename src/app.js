console.log('app.js is running')

const app = {
  title: 'Indecision',
  subtitle: 'But how to choose?',
  options: [],
  nothing: 'nowhere'
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const optionsTags = (options) => options.map((option) => <li>{option}</li>);

const removeAllOptions = () => {
  if (app.options.length > 0) {
    app.options = [];
    renderApp();
  }
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options!'}</p>
      <ol>{optionsTags(app.options)}</ol>
      <button onClick={removeAllOptions}>Remove All</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderApp();
