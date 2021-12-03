import React, { Component } from 'react';
import Item from '../item/item';
import './index.css'

// const todos = ['看电影', '吃饭', '上班'];

class List extends Component {

  render () {
    const listItem = this.props.listItem || [];
    return (
      <div className="list">
        {listItem.map((item, index) => {
          return (
            <Item item={item} key={index} />
          )
        })
        }
      </div>
    )
  }
}
export default List;