
class GoldRush extends Matrix {
    constructor() {
        super(ROWS, COLUMNS)
        this.generateWalls()
        this.generateCoins()
        this.players = {
            1: new Player(1, 1),
            2: new Player(ROWS - 2, COLUMNS - 2)
        }
        this.movments = {
            "right": this.moveRight,
            "left": this.moveLeft,
            "down": this.moveDown,
            "up": this.moveUp
        }
    }
    generateWalls() {
        const numberOfWalls = (COLUMNS - 1) * 3
        let j = 0
        while (j < numberOfWalls) {
            let y =j % ((COLUMNS - 2) - 2) + 2 
            let x = Math.floor(Math.random() * ((COLUMNS - 2) - 2)) + 2
            if (this.matrix[x][y] === EMPTY_SPACE) {
                this.alter(x, y, WALL)
                j++
            }
        }
    }

    generateCoins() {
        for (let r = 1; r < ROWS - 1; r++) {
            for (let c = 1; c < COLUMNS - 1; c++) {
                if (this.matrix[r][c] === EMPTY_SPACE) {
                    this.checkBorers(r, c)
                }
            }
        }
    }

    checkBorers(row, col) {
        if (this.matrix[row][col - 1] !== WALL && this.matrix[row][col + 1] !== WALL) {
            this.alter(row, col, COIN)
            return
        }
        if (this.matrix[row - 1][col] !== WALL && this.matrix[row + 1][col] !== WALL) {
            this.alter(row, col, COIN)
            return
        }
        if(row -1 >0){
          this.alter(row - 1, col, COIN)
        }
    }

    movePlayer(player, direction) {
        this.movments[direction](player)
    }

    movingValidation = (player, X_position, Y_position) => {
        const end = ROWS - 1
        if ((X_position < 1 || X_position > end - 1) || (Y_position < 1 || Y_position > end - 1)) {
            return false
        }
        let nextPosition = this.matrix[X_position][Y_position]
        if (nextPosition !== COIN && nextPosition !== ".") {
            return false
        } else if (nextPosition == COIN) {
            player.score += 10
        }
        return true
    }

    moveLeft = (player) => {
        const currentPlayer = this.players[player]
        if (this.movingValidation(currentPlayer, currentPlayer.X_position, currentPlayer.Y_position - 1)) {
            this.alter(currentPlayer.X_position, currentPlayer.Y_position, ".")
            currentPlayer.Y_position -= 1
            this.alter(currentPlayer.X_position, currentPlayer.Y_position, player)
        }
    }

    moveRight = (player) => {
        const currentPlayer = this.players[player]
        if (this.movingValidation(currentPlayer, currentPlayer.X_position, currentPlayer.Y_position + 1)) {
            this.alter(currentPlayer.X_position, currentPlayer.Y_position, ".")
            currentPlayer.Y_position += 1
            this.alter(currentPlayer.X_position, currentPlayer.Y_position, player)
        }
    }

    moveUp = (player) => {
        const currentPlayer = this.players[player]
        if (this.movingValidation(currentPlayer, currentPlayer.X_position - 1, currentPlayer.Y_position)) {
            this.alter(currentPlayer.X_position, currentPlayer.Y_position, ".")
            currentPlayer.X_position -= 1
            this.alter(currentPlayer.X_position, currentPlayer.Y_position, player)
        }
    }

    moveDown = (player) => {
        const currentPlayer = this.players[player]
        if (this.movingValidation(currentPlayer, currentPlayer.X_position + 1, currentPlayer.Y_position)) {
            this.alter(currentPlayer.X_position, currentPlayer.Y_position, ".")
            currentPlayer.X_position += 1
            this.alter(currentPlayer.X_position, currentPlayer.Y_position, player)
        }
    }
}