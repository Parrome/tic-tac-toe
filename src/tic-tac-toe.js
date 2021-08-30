class TicTacToe {
    constructor() {
        this.state = {
            currentPlayerSymbol: 'x',
            previousPlayerSymbol: null,
            board: [
                [null, null, null],
                [null, null, null],
                [null, null, null],
            ]
        };
    }

    winningCombos = [
        [{ row: 0, col: 0}, { row: 0, col: 1 }, { row: 0, col: 2 }],
        [{ row: 1, col: 0}, { row: 1, col: 1 }, { row: 1, col: 2 }],
        [{ row: 2, col: 0}, { row: 2, col: 1 }, { row: 2, col: 2 }],
        [{ row: 0, col: 0}, { row: 1, col: 0 }, { row: 2, col: 0 }],
        [{ row: 0, col: 1}, { row: 1, col: 1 }, { row: 2, col: 1 }],
        [{ row: 0, col: 2}, { row: 1, col: 2 }, { row: 2, col: 2 }],
        [{ row: 0, col: 0}, { row: 1, col: 1 }, { row: 2, col: 2 }],
        [{ row: 0, col: 2}, { row: 1, col: 1 }, { row: 2, col: 0 }],
    ];

    getCurrentPlayerSymbol() {
        return this.state.currentPlayerSymbol;
    }

    swapCurrentPlayerSymbol() {
        switch (this.state.currentPlayerSymbol) {
            case 'x':
                this.state.currentPlayerSymbol = 'o';
                break;
            case 'o':
            default:
                this.state.currentPlayerSymbol = 'x';
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.state.board[rowIndex][colIndex];
    }

    boardMatchesPattern(board, pattern, playerSymbol) {
        return pattern.every(fieldCoords => 
            board[fieldCoords.row][fieldCoords.col] == playerSymbol);
    }
    
    getWinner() {
        const boardContainsWinningCombo = this.winningCombos.some(combo => 
            this.boardMatchesPattern(this.state.board, combo, this.state.previousPlayerSymbol));

        return (boardContainsWinningCombo) ?
            this.state.previousPlayerSymbol :
            null;
    }

    noMoreTurns() {
        return this.state.board.every(row => 
            row.every(field => field != null));
    }

    isFinished() {
        return (this.getWinner() != null || this.noMoreTurns());
    }

    isDraw() {
        return (this.getWinner() == null && this.noMoreTurns());
    }
    
    resetBoard() {
        this.state.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.isFinished()) {
            this.resetBoard();
        }

        if (this.getFieldValue(rowIndex, columnIndex) != null) {
            //console.log('Invalid move: board field is already used');
            return;
        }

        this.state.previousPlayerSymbol = this.state.board[rowIndex][columnIndex] 
            = this.getCurrentPlayerSymbol();

        this.swapCurrentPlayerSymbol();
    }
}


let game = new TicTacToe();
game.nextTurn(2, 2);
game.nextTurn(1, 2);
game.nextTurn(0, 0);
game.nextTurn(1, 0);
game.nextTurn(0, 1);
game.nextTurn(2, 2);
game.nextTurn(2, 0);
game.nextTurn(2, 0);
game.nextTurn(0, 0);
game.nextTurn(0, 1);
game.nextTurn(1, 2);
game.nextTurn(2, 0);
game.nextTurn(0, 1);
game.nextTurn(0, 0);
game.nextTurn(2, 1);
game.nextTurn(2, 2);
game.nextTurn(2, 2);
game.nextTurn(0, 2);
game.nextTurn(1, 2);
game.nextTurn(1, 2);
game.nextTurn(0, 2);
game.nextTurn(1, 2);
game.nextTurn(2, 1);
game.nextTurn(2, 0);
game.nextTurn(0, 0);
game.nextTurn(1, 2);
game.nextTurn(0, 0);
game.nextTurn(1, 0);
game.nextTurn(0, 2);
game.nextTurn(2, 1);
game.nextTurn(0, 1);
game.nextTurn(0, 0);
game.nextTurn(2, 2);
game.nextTurn(0, 1);
game.nextTurn(0, 0);
game.nextTurn(2, 0);
game.nextTurn(1, 1);
game.isDraw();

module.exports = TicTacToe;