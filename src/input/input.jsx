import React, { Component } from 'react';
import './input.css'

class Input extends Component {

  handleKeyUp (event) {
    if (event.keyCode === 13) {
      const value = event.target.value;
      if (value) {
        this.props.onChange(value);
        event.target.value = '';
      }
    }
  }

  componentDidMount () {
    // 调用 focus 逻辑
    this.input.focus()
  }

  render () {
    return (
      <div className="input-container">
        <input onKeyUp={this.handleKeyUp.bind(this)}
          ref={input => this.input = input}
        />
      </div>
    )
  }
}
export default Input;