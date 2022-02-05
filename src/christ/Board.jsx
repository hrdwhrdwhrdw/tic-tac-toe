import React from "react";
import Square from "./Square";

class Board extends React.Component {
  render() {
    return (
      <div>
        <ul className="board-row">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index, i) => {
            return (
                <Square
                  activeValue={this.props.activeValue}
                  key={i}
                  index={index}
                  value={this.props.squares[i]}
                  onClick={() => this.props.onClick(i)}
                  className={this.props.activeValue === i + 1 ? "chosen" : ""}
                />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Board;
