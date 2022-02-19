import React, { Component } from 'react';
import Position from './Position';

export default class MoveList extends Component {
  renderMoveList(i) {
    return (
      <Position 
        key={i}
        value={this.props.chosenValue[i]} 
        onClick={(val) => this.props.onClick(val)}
      />
    )
  }

  createMoveList() {
    let arr = [0,1,2,3,4,5,6,7,8]
    if (!this.props.isSorted) {
      return arr.map(i =>  this.renderMoveList(i))
    }

    if (this.props.isSorted) {
      let result = []
      for (let i = arr.length - 1; i >= 0; i--) {
        result.push(this.renderMoveList(i))
      }
      return result;
    }
  }

  render() {
    return <div>
      <button onClick={() => this.props.toSort()}>
        {this.props.isSorted ? "Sort from 1 to current" : "Sort from current to 1"}
      </button>
      <ul>
        {this.createMoveList()}
      </ul>
    </div>;
  }
}
