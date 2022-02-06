import React from "react";
import Square from "./Square";

class Board extends React.Component {
  // renderSquare(i) {
  //   return (
  //     <Square
  //       key={i}
  //       activeValue={this.props.activeValue}
  //       value={this.props.squares[i]}
  //       onClick={() => this.props.onClick(i)}
  //       className={this.props.activeValue === i + 1 ? "chosen" : ""}
  //     />
  //   );
  // }
  // [ 0, 1, 2,
  //   3, 4, 5,
  //   6, 7, 8 ]
  //  i  j    i  j    i  j
  // [
  //  [0, 0], [1, 0], [2, 0],
  //  [0, 1], [1, 1], [2, 1],
  //  [0, 2], [1, 2], [2, 2]
  // ]
  
  render() {
    return (
      <div>
        <div className="board-row">{this.props.field.map((i) => {
      return (
          <Square
            key={i}
            activeValue={this.props.activeValue}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            className={this.props.activeValue === i + 1 ? "chosen" : ""}
          />
      );
    })}</div>
      </div>
    );
  }
}

export default Board;
