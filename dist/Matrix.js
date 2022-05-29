class Matrix {
    constructor(row, col) {
        this.matrix = this.generateMatrix(row, col)
    }
    print() {
        console.log(this.matrix)
    }
    get(x, y) {
        return this.matrix[x][y]
    }
    alter(row, col, value) {
        this.matrix[row][col] = value
    }
    printColumn(x) {
        this.matrix.forEach(row => console.log(row[x]))
    }
    printRow(y) {
        for (let i = 0; i < this.matrix[y].length; i++) {
            console.log(this.matrix[y][i])
        }
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(".")
            }
        }
        for (let i = 0; i < ROWS; i++) {
            matrix[i][0] =WALL
            matrix[0][i] =WALL
            matrix[i][ROWS-1] =WALL
            matrix[ROWS-1][i] =WALL
        }
        matrix[1][1]=PLAYER_1
        matrix[numRows-2][numColumns-2]=PLAYER_2
        return matrix
    }
}