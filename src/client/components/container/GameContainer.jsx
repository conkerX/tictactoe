import React, { Component } from 'react';
import Board from '../presentational/Board.jsx';
import Timer from '../presentational/Timer.jsx';
import { incrementTime, checkForWin } from '../../utils/helpers';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWinner: false,
      goodMoves: [],
      board: Array(9).fill(null),
      player: 'X',
      time: '00:00',
    };

    this.startTime = setInterval(() => {
      // incremnt time
      // update state
      this.setState({
        time: incrementTime(this.state.time),
      });
    }, 1000);

    this.handleClick = this.handleClick.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  handleClick(e, position) {
    if (this.state.isWinner) {
      return;
    }

    const updatedBoard = [...this.state.board];
    updatedBoard[position] = this.state.player;
    const currentPlayer = this.state.player;

    this.setState({
      board: updatedBoard,
      player: (this.state.player === 'X' ? 'O' : 'X'),
    }, () => {
      const winningMoves = checkForWin(this.state.board, currentPlayer);
      if (winningMoves) {
        this.setState({
          isWinner: true,
          goodMoves: winningMoves,
        });

        clearInterval(this.startTime);
      }
    });
  }

  restartTime() {
    clearInterval(this.startTime);

    this.setState({
      time: '00:00',
    });
  }

  newGame() {
    this.restartTime();

    this.startTime = setInterval(() => {
      this.setState({
        time: incrementTime(this.state.time),
      });
    }, 1000);

    this.setState({
      isWinner: false,
      board: Array(9).fill(null),
    });
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <button onClick={this.newGame}>New Game</button>
        <Timer
          time={this.state.time}
          newGame={this.newGame}
        />
        <Board
          handleClick={this.handleClick}
          board={this.state.board}
          isWinner={this.state.isWinner}
          goodMoves={this.state.goodMoves}
        />
      </div>
    );
  }
}

export default GameContainer;
