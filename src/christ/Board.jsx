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
    
    // return rows.map((key) => {
    //   return <div className='board-row'>
    //     {key.map(i => this.renderSquare(i))}
    //   </div>
    // });


    return rows.map((key) => {
      console.log(key)
      return <div className='board-row'>
        {key.map(i => {return <Square
        activeValue={this.props.activeValue}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className={this.props.activeValue ===  i +1 ? "chosen" : ""}
      />})}
      </div>
    });
    
  }

  renderSquare(i) {
    return (
      <Square
        activeValue={this.props.activeValue}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className={this.props.activeValue ===  i +1 ? "chosen" : ""}
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
