
const playBtn = document.getElementById('play');


function startPlay() {

    const gridBox = document.getElementById('grid-box');
    const grid = document.createElement('div');
    const BOMB_NUMBER = 16;

    gridBox.innerHTML = ''
    console.log('Gioco iniziato...')
    function mkCell(cellNumber) {

        const cell = document.createElement('div');
        cell.innerHTML = `<span>${cellNumber}</span>`
        cell.className = 'cell';
        grid.appendChild(cell);
        cell.addEventListener('click', () => {
            cell.classList.add('cell-pass');
            console.log(cellNumber);
        })

    }

    function mkGrid() {
        grid.className = 'grid';
        gridBox.appendChild(grid);
        for (let i = 1; i <= 100; i++) {
            mkCell(i);
        }
    }

    function mkBomb() {

    }

    mkGrid();

}


playBtn.addEventListener('click', startPlay);