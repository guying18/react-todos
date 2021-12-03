import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input/input';
import List from './list/list';
import './style.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      listItem: []
    }
  }
  onChange (value) {
    let listItem = this.state.listItem;
    listItem.push(value);
    this.setState({
      listItem: listItem
    });
    // console.log(this.state.listItem);
  }

  render () {
    return (
      <div className="app">
        <h1>Todos</h1>
        <Input onChange={this.onChange.bind(this)} />
        <List listItem={this.state.listItem} />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
