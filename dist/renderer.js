class Renderer {
    renderBoard(boardData) {
        const newHtml = $("#world")
        newHtml.empty()
        let el = ``
		for (let y = 0; y < boardData.length; y = y + 1) {
			for (var x = 0; x < boardData[y].length; x = x + 1) {
				if (boardData[y][x] === WALL) {
					el += "<div class='wall'></div>";
				}
				else if (boardData[y][x] === COIN) {
					el += "<div class='coin'></div>";
				}
				else if (boardData[y][x] === EMPTY_SPACE ) {
					el += "<div class='ground'></div>";
				}
				else if (boardData[y][x] === PLAYER_2) {
					el += "<div class='ghost'></div>";
				}
				else if (boardData[y][x] === PLAYER_1) {
					el += "<div class='pacman'></div>";
				}
			}
			el += "<br>";
		}

        newHtml.append(el)
    }
}