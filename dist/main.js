const board = new GoldRush()
const render = new Renderer()
render.renderBoard(board.matrix)

document.addEventListener('keydown', e => {
    
    if (e.key === 'w') {
        board.movePlayer(PLAYER_1,"up")
        render.renderBoard(board.matrix)
    }else if(e.key === 's'){
        board.movePlayer(PLAYER_1,"down")
        render.renderBoard(board.matrix)
    }else if(e.key === 'a'){
        board.movePlayer(PLAYER_1,"left")
        render.renderBoard(board.matrix)
    }else if(e.key === 'd'){
        board.movePlayer(PLAYER_1,"right") 
        render.renderBoard(board.matrix)
    }

    if (e.key === 'i') {
        board.movePlayer(PLAYER_2,"up")
        render.renderBoard(board.matrix)
    }else if(e.key === 'k'){
        board.movePlayer(PLAYER_2,"down")
        render.renderBoard(board.matrix)
    }else if(e.key === 'j'){
        board.movePlayer(PLAYER_2,"left")
        render.renderBoard(board.matrix)
    }else if(e.key === 'l'){
        board.movePlayer(PLAYER_2,"right") 
        render.renderBoard(board.matrix)
    }
     
})




