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
      return <div className="board__row" key={key[0]}>
        {key.map(i => {return this.renderSquare(i)})}
      </div>
    });
  }

  setWinnerClass(winCombination, current) {
    if (!winCombination) return;
    for (let i = 1; i < winCombination.length; i++) {
      if (current === winCombination[i]) {
        return "winner"
      }
    }
  }

  setChosenClass(activeValue, current) {
    if (activeValue === current + 1) {
      return "chosen"
    }
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className={`${this.setChosenClass(this.props.activeValue, i)} + ${this.setWinnerClass(this.props.winner, i)}`}
      />
    );
  }

  render() {
    return (
      <div className="game__board">
        {this.createSquares()}
      </div>
    );
  }
}

export default Board;
