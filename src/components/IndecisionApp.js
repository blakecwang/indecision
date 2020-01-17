import React from 'react'

import Action    from './Action'
import AddOption from './AddOption'
import Header    from './Header'
import Options   from './Options'

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

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
