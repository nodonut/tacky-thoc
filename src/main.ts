import './style.css'

const Gameboard = (() => {
    const gameBoard = [];

    function display() {
        const app = document.querySelector<HTMLDivElement>("#app");
        const container = document.createElement("div");
        container.classList.add("gameboard");
        
        if (!app) {
            throw new Error("HTML node app not found");
        }

        app.appendChild(container);


    }

    return 
})();
