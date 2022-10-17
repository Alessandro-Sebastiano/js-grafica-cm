
const playBtn = document.getElementById('play');


function startPlay() {

    const gridBox = document.getElementById('grid-box');
    const grid = document.createElement('div');

    gridBox.innerHTML = ''
    console.log('Gioco iniziato...')
    function mkCell(cellNumber) {

        const cell = document.createElement('div');
        cell.innerHTML = `<span>${cellNumber}</span>`
        cell.className = 'cell';
        grid.appendChild(cell);
        cell.addEventListener('click', () => {
            cell.classList.add('cell-pass');
        })

    }

    function mkGrid() {
        grid.className = 'grid';
        gridBox.appendChild(grid);
        for (let i = 1; i <= 100; i++) {
            mkCell(i);
        }
    }

    mkGrid();

}


playBtn.addEventListener('click', startPlay);