console.log('app.js is running')

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.chooseOption = this.chooseOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.state = {
      options: []
    };
  }
  chooseOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum]);
  }
  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      e.target.elements.option.value = '';
      this.setState((prevState) => {
        prevState.options.push(option);
        return { options: prevState.options };
      });
    }
  }
  deleteOptions() {
    this.setState(() => {
      return { options: [] };
    });
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          optionsEmpty={this.state.options.length === 0}
          handleChooseOption={this.chooseOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.deleteOptions}
        />
        <AddOption handleAddOption={this.addOption}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={this.props.optionsEmpty}
          onClick={this.props.handleChooseOption}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option, i) => <Option key={i} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
