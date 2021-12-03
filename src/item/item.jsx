import React, { Component } from 'react';
import './index.css'

class Item extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false
    }
  }

  handleClick () {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    const item = this.props.item;
    const isChecked = this.state.isChecked;
    const doneCls = isChecked ? ' item-done' : '';
    return (
      <div className={"item" + doneCls}>
        <input className="item-cb"
          type="checkbox"
          onClick={this.handleClick.bind(this)} />
        <span className="item-text">{item}</span>
      </div>
    )
  }
}
export default Item;