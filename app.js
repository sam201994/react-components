var GroceryList = props => {
  var css = `
   .groceryItems:hover {
      font-weight: bold;
   }
  `;
  return (
    <ul>
      <style>
        {css}
      </style>
      {
        props.grocery.map((item, key) => (
          <GroceryListItem key={key} grocery={item} />
        ))
      }
    </ul>
  );
};

// var GroceryListItem = props => (
//   <li>{props.grocery}</li>
// );

var App = () => (
  <div>
    <GroceryList grocery={['carrot', 'radish']}/>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  onMo

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li key={this.props.key} className='groceryItems' style={style} onClick={this.onListItemClick.bind(this)} >{this.props.grocery}</li>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));