import React, { Component } from "react";

export default class Status extends Component {
    setMoveList() {
        const history = this.props.history;
        if (!this.props.isSorted) {
            return history.map((step, move) => {
                const desc = move ? "Go to move #" + move : "Go to game start";
                return (
                    <li key={move}>
                    <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
                    </li>
                );
            });
        }

        if (this.props.isSorted) {
            let moves = [];
            moves.push(<li key={0}>
                <button onClick={() => this.props.jumpTo(0)}>Go to game start</button>
                </li>)
            for (let i = history.length - 1; i > 0; i--) {
                const desc = i ? "Go to move #" + i : "Go to game start";
                moves.push(<li key={i}>
                    <button onClick={() => this.props.jumpTo(i)}>{desc}</button>
                    </li>)
            }
            return moves
        }
    }

    xIsWinner(history) {
        let lastMoves = history[8];
        let lastSquares = lastMoves.squares;

        if ((lastSquares[4] === "X" && lastSquares[0] === "X" && lastSquares[8] !== "O") || 
            (lastSquares[4] === "X" && lastSquares[2] === "X" && lastSquares[6] !== "O") ||
            (lastSquares[4] === "X" && lastSquares[6] === "X" && lastSquares[2] !== "O") ||
            (lastSquares[4] === "X" && lastSquares[8] === "X" && lastSquares[0] !== "O")) {
            return true
        }
    }

    getStatus() {
        if (this.props.winner) {
        return "Winner: " + this.props.winner[0];
        } else if (this.props.history.length > 8 && this.xIsWinner(this.props.history)) {
        return "Winner: X"
        } else if (this.props.history.length > 8 && !this.props.winner) {
        return "Game has no winner";
        } else if (this.props.history.length - 1 < 9) {
        return "Next player: " + (this.props.xIsNext ? "X" : "O");
        }
    }

    render() {
        return (
        <div className="game__info">
            <div className="game__status">
                {this.getStatus()}
            </div>
            <ul className="game__move-list">
                {this.setMoveList()}
            </ul>
        </div>
        );
    }
}
