import React from "react";
import Square from "./Square";

class Board extends React.Component {
  createSquares() {
    const field = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let rowLength = 3;
    let size = field.length / rowLength;
    let rows = [];
    for (let i = 0; i < size; i++) {
      rows[i] = field.slice(i * size, i * size + size);        // rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    }
    
    return rows.map((key) => {
      return <div className='board-row' id={key[0] + 10}>
        {key.map(i => {return this.renderSquare(i)})}
      </div>
    });
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        activeValue={this.props.activeValue}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className={this.props.activeValue ===  i + 1 ? "chosen" : ""}
      />
    );
  }

  render() {
    return (
      <div>
        {this.createSquares()}
      </div>
    );
  }
}

export default Board;
