console.log('visibility-toggle-state.js is running')

class Visibility extends React.Component {
  render() {
    const title = 'Toggle Visibility'
    const details = 'Here are some details!'

    return (
      <div>
        <Header title={title} />
        <Details details={details} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.state = {
      visible: false
    };
  }
  toggleVisible() {
    this.setState((prevState) => {
      return { visible: !prevState.visible };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleVisible}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible && <p>{this.props.details}</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
