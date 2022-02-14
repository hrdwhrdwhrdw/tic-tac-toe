import React, { Component } from 'react';
import Position from './Position';

export default class MoveList extends Component {
  renderMoveList(i) {
    return (
      <Position 
        value={this.props.chosenValue[i]} 
        onClick={(val) => this.props.onClick(val)}
      />
    )
  }

  createMoveList() {
    for (let i = 0; i < 9; i++) {
      return this.renderMoveList(i)
    }
  }

  render() {
    return <div>
      <ul>
        {this.createMoveList()}
      </ul>
    </div>;
  }
}
