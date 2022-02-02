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

  render() {
    return <div>
      <ul>
        {this.renderMoveList(0)}
        {this.renderMoveList(1)}
        {this.renderMoveList(2)}
        {this.renderMoveList(3)}
        {this.renderMoveList(4)}
        {this.renderMoveList(5)}
        {this.renderMoveList(6)}
        {this.renderMoveList(7)}
        {this.renderMoveList(8)}
      </ul>
    </div>;
  }
}
