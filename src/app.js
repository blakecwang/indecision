console.log('app.js is running')

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.chooseOption = this.chooseOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing if invalid JSON
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const options = JSON.stringify(this.state.options);
      localStorage.setItem('options', options);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount ran');
  }
  chooseOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum]);
  }
  addOption(option) {
    if (!option) {
      return 'Please provide a valid option!';
    } else if (this.state.options.indexOf(option) > -1) {
      return `${option} is already present!`;
    }

    this.setState((prevState) => (
      { options: prevState.options.concat(option) }
    ));
  }
  deleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  deleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove != option )
    }));
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          optionsEmpty={this.state.options.length === 0}
          handleChooseOption={this.chooseOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.deleteOptions}
          handleDeleteOption={this.deleteOption}
        />
        <AddOption handleAddOption={this.addOption}/>
      </div>
    );
  }
}
//IndecisionApp.defaultProps = {
//  options: []
//};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        disabled={props.optionsEmpty}
        onClick={props.handleChooseOption}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option, i) => {
          return <Option key={i} optionText={option} handleDeleteOption={props.handleDeleteOption} />
        })
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <p>
        {props.optionText}
        <button onClick={(e) => {
          return props.handleDeleteOption(props.optionText);
        }}>Remove</button>
      </p>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = { error: undefined }
  }
  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'));
