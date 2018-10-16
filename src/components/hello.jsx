// const Hello = (props) => {
//   return <div>Hello, {props.name}</div>;
// }

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <h1 className={this.state.clicked ? "clicked" : ""}
      onClick={this.handleClick}>
        Hello, {this.props.name}
      </h1>
    );
  }
}
