import React from "react";
import Board from "./Board";
import MoveList from "./MoveList";
import Status from "./Status";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null), //      history: [
          // 	      { squares: [X, null, O, null, null, null, null, null, null] },  move 2 value 3
          // 	      { squares: [X, null, O, null, null, Х, null, null, null] } move 3 value 6        example of history
          // 	      { squares: [X, null, O, null, О, Х, null, null, null] }  move 4 value 3
          //      ]
        },
      ],
      historyValues: [
        {
          chosenValue: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      isSorted: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); //    creating array of history
    const current = history[history.length - 1]; //    get object of last step
    const squares = current.squares.slice(); //    creating array of last step from history

    const historyValues = this.state.historyValues.slice(
      0,
      this.state.stepNumber + 1
    );
    const currentValue = historyValues[historyValues.length - 1];
    const chosenValue = currentValue.chosenValue.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    chosenValue[this.state.stepNumber] = i + 1;

    this.setState({
      // set current history and history ov values
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      historyValues: historyValues.concat([
        {
          chosenValue: chosenValue,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  calculateWinner(squares) {
    // function for calculating winner
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return [squares[a], a, b, c];
      }
    }
  }

  jumpTo(step) {
    // function for switching step
    if (step < this.state.history.length) {
      this.setState({
        activeValue: null,
      });
    }
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      history: this.state.history.slice(0, step + 1),
    });
  }

  addClass(val) {
    // function for adding class of selected position
    this.setState({
      activeValue: val,
    });
  }

  toSort() {
    this.setState({
      isSorted: !this.state.isSorted,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const historyValues = this.state.historyValues;
    const currentValue = historyValues[this.state.stepNumber];
    let winner = this.calculateWinner(current.squares);

    return (
      <div className="game">
        <div className="game-wrapper">
          <Board
            squares={current.squares}
            activeValue={this.state.activeValue}
            onClick={(i) => this.handleClick(i)}
            winner={winner}
          />
          <div className="game__info-container">
            <Status
              winner={winner}
              xIsNext={this.state.xIsNext}
              history={this.state.history}
              jumpTo={(val) => this.jumpTo(val)}
              isSorted={this.state.isSorted}
            />
            <MoveList
              toSort={() => this.toSort()}
              isSorted={this.state.isSorted}
              squares={this.state.history[0].squares}
              chosenValue={currentValue.chosenValue}
              onClick={(val) => this.addClass(val)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
