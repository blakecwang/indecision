class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count
    };
  }
  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem('count'));
      if (!isNaN(count)) {
        console.log('loading localStorage count: ' + count);
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // Do nothing if invalid JSON
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      console.log('setting localStorage count: ' + this.state.count);
      localStorage.setItem('count', this.state.count);
    }
  }
  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  decrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  reset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>0</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter />, document.getElementById("app"));
