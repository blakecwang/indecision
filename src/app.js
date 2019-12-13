console.log('app.js is running')

var app = {
  title: 'Indecision',
  subtitle: 'But how to choose?',
  options: ['One', 'Two'],
  nothing: 'nowhere'
}

var template = (
  <div>
    <h1>{app.title.toUpperCase()}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options!'}</p>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>
  </div>
);

var user = {
  name: 'Blake Wang',
//  age: 21,
  location: 'Santa Barbara'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name.toUpperCase() : 'ANONYMOUS'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
