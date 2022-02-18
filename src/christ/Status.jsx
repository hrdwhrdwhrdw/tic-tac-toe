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
    render() {
        let status;
        if (this.props.winner) {
        status = "Winner: " + this.props.winner[0];
        } else if (this.props.history.length > 8 && !this.props.winner) {
        status = "Game has no winner";
        } else if (this.props.history.length - 1 < 9) {
        status = "Next player: " + (this.props.xIsNext ? "X" : "O");
        }

        return (
        <div className="game-info">
            {status}
            <ol>{this.setMoveList()}</ol>
        </div>
        );
    }
}
