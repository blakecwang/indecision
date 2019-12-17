console.log('app.js is running')

const app = {
  title: 'Indecision',
  subtitle: 'But how to choose?',
  options: [],
  choice: undefined,
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

const removeAllOptions = () => {
  if (app.options.length > 0) {
    app.options = [];
    renderApp();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options!'}</p>
      <ol>
      {
        app.options.map((option, i) => <li key={i}>{option}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAllOptions}>Remove All</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderApp();
