import React, { Component } from "react";

export default class Status extends Component {
    render() {
        let status;
        if (this.props.winner) {
        status = "Winner: " + this.props.winner;
        } else if (this.props.history.length > 8 && !this.props.winner) {
        status = "Game has no winner";
        } else if (this.props.history.length - 1 < 9) {
        status = "Next player: " + (this.props.xIsNext ? "X" : "O");
        }

        const moves = this.props.history.map((step, move) => {
        const desc = move ? "Go to move #" + move : "Go to game start";
        return (
            <li key={move}>
            <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
            </li>
        );
        });

        return (
        <div className="game-info">
            {status}
            <ol>{moves}</ol>
        </div>
        );
    }
}
