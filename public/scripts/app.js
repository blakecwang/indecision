'use strict';

console.log('app.js is running');

var app = {
  title: 'Indecision',
  subtitle: 'But how to choose?',
  options: [],
  nothing: 'nowhere'
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var optionsTags = function optionsTags(options) {
  return options.map(function (option) {
    return React.createElement(
      'li',
      null,
      option
    );
  });
};

var removeAllOptions = function removeAllOptions() {
  if (app.options.length > 0) {
    app.options = [];
    renderApp();
  }
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title.toUpperCase()
    ),
    app.subtitle && React.createElement(
      'h2',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options:' : 'No options!'
    ),
    React.createElement(
      'ol',
      null,
      optionsTags(app.options)
    ),
    React.createElement(
      'button',
      { onClick: removeAllOptions },
      'Remove All'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
renderApp();
