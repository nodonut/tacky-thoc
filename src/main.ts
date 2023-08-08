import './style.css';

type Player = {
    name: string;
    side: 'x' | 'o';
};

const Gameboard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let players: Player[];
    let currentPlayer: Player;

    function updateBoard(value: 'x' | 'o', index: number): void {
        gameBoard[index] = value;
        syncBoard();
    }

    function resetBoard(): void {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        syncBoard();
    }

    function syncBoard() {
        destroyBoard();
        createBoard();
    }

    function createBoard() {
        const app = document.querySelector<HTMLDivElement>('#app');
        const container = document.createElement('div');
        container.classList.add('gameboard');
        container.id = 'gameboard';

        for (let i = 0; i < gameBoard.length; i++) {
            const child = box(gameBoard[i]);
            child.setAttribute('data-value', i.toString());
            child.addEventListener('click', function boxHandleClick() {
                const value = this.getAttribute('data-value');
                updateBoard('x', Number(value));
            });
            container.appendChild(child);
        }

        if (!app) {
            throw new Error('HTML node app not found');
        }

        app.appendChild(container);
    }

    function destroyBoard() {
        const app = document.querySelector<HTMLDivElement>('#app');
        const board = document.getElementById('gameboard') as HTMLDivElement;

        if (!board) {
            throw new Error("Can't destroy a board that does not exist");
        }

        app?.removeChild(board);
    }

    return {
        createBoard,
        resetBoard,
    };
})();

function box(text: string): HTMLDivElement {
    const container = document.createElement('div');
    container.classList.add('box');

    if (text) {
        container.innerText += text;
    }

    return container;
}

const form = document.querySelector('form') as HTMLFormElement;
form.onsubmit = () => {
    const formData = new FormData(form);

    const playerName = formData.get('name')?.toString() as string;
    const newPlayer: Player = {
        name: playerName,
        side: 'x',
    };

    console.log(newPlayer);
};

Gameboard.createBoard();

const resetButton = document.getElementById('reset') as HTMLButtonElement;
if (!resetButton) {
    console.warn('No reset button found. Resetting the gameboard anyway');
}
resetButton.onclick = Gameboard.resetBoard;
