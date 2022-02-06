import React from "react";
import Board from "./Board";
import MoveList from "./MoveList";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {                                      
      history: [
        {
          squares: Array(9).fill(null),                 //      history: [
                                                        // 	      { squares: [X, null, O, null, null, null, null, null, null] },  move 2 value 3
                                                        // 	      { squares: [X, null, O, null, null, Х, null, null, null] } move 3 value 6        example of history
                                                        // 	      { squares: [X, null, O, null, О, Х, null, null, null] }  move 4 value 3
                                                        //      ]
        },
      ],
      historyValues: [
        {
          chosenValue: Array(9).fill(null)
        }
      ],
      field: [
        [0, 0], [1, 0], [2, 0],
        [0, 1], [1, 1], [2, 1],
        [0, 2], [1, 2], [2, 2]
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);         //    creating array of history
    const current = history[history.length - 1];                                    //    get object of last step
    const squares = current.squares.slice();                                        //    creating array of last step from history

    const historyValues = this.state.historyValues.slice(0, this.state.stepNumber + 1);
    const currentValue = historyValues[historyValues.length - 1];
    const chosenValue = currentValue.chosenValue.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    chosenValue[this.state.stepNumber] = i + 1;

    this.setState({                             // set current history and history ov values
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      historyValues: historyValues.concat([
        {
          chosenValue: chosenValue
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  calculateWinner(squares) {                    // function for calculating winner
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  }

  jumpTo(step) {                                      // function for switching step
    if (step < this.state.history.length) {
      this.setState({
        activeValue: null
      })
    }
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      history: this.state.history.slice(0, step + 1)
    });
  }

  addClass(val) {                                     // function for adding class of selected position
    this.setState({
      activeValue: val
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const historyValues = this.state.historyValues;
    const currentValue = historyValues[this.state.stepNumber];

    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {                             // create array of movelist
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>       
        </li>
      );
    });

    let status;
    if (winner) {                                                           // set status
      status = "Winner: " + winner;
    } else if ((this.state.history.length > 8 && !winner)) {                       
      status = "Game has no winner"
    } else if (history.length - 1 < 9) {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            activeValue={this.state.activeValue}
            field={this.state.field}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
          <div className="movelist"> 
          </div>
        </div>
        <MoveList
          chosenValue={currentValue.chosenValue}
          onClick={(val) => this.addClass(val)} />
      </div>
    );
  }
}

export default Game;