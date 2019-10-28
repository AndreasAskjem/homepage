let games = [
    {
        name: 'Memory',
        link: 'https://andreasaskjem.github.io/Modul1Oblig1/memoGame.html',
        description: 'Flip 2 cards at a time and try to find matching ones. Customizable board size.'
    },
    {
        name: 'Yatzy',
        link: 'https://andreasaskjem.github.io/Oppgaver/Yatzy/yatzy.html',
        description: 'Allows for any number of players. Dices can be re-thrown twice. Scores are tracked automatically.'
    },
    {
        name: 'Minesweeper',
        link: 'https://andreasaskjem.github.io/Oppgaver/Minesweeper2/main.html',
        description: 'Click the flag on top (or hold Ctrl while clicking) to place flags. 3 difficulties.'
    },
    {
        name: 'Minesweeper Online',
        link: 'https://andreasaskjem.github.io/Oppgaver/MinesweeperOnline/',
        description: 'Same as above, but with online leaderboard.'
    },
    {
        name: 'Snake',
        link: 'https://andreasaskjem.github.io/Oppgaver/mySnake/main.html',
        description: 'Eat the apples. Use the arrow keys. Press Enter to restart.'
    }
];

let miscellaneous = [
    {
        name: 'Modul1 Oblig1',
        link: 'https://andreasaskjem.github.io/Modul1Oblig1/main.html',
        description: 'Click buttons to change colors.'
    },
    {
        name: 'Modul1 Oblig2',
        link: 'https://andreasaskjem.github.io/Modul1Oblig2/main.html',
        description: 'Add, remove and change bars from a diagram.'
    },
    {
        name: 'Labyrinth generator',
        link: 'https://andreasaskjem.github.io/Oppgaver/Labyrintgenerator/Labyrintgenerator.html',
        description: 'Generates a solid outer wall and random inner walls on load. Click walls to toggle them.'
    },
    {
        name: 'Labyrinth generator done with MVC',
        link: 'https://andreasaskjem.github.io/Oppgaver/LabyrintgeneratorMVC/LabyrintgeneratorMVC.html',
        description: 'Same as above, but written using Model View Controller. Also has entrance/exit.'
    },
    {
        name: 'Todo list',
        link: 'https://andreasaskjem.github.io/Oppgaver/todoList/',
        description: 'Add, remove and edit tasks on a todo list.'
    }
];



let tableHTML;
createTable();
function createTable(){
    tableHTML = `
    <tr>
        <th class="firstColumn">Games</th>
        <th class="description">Description</th>
    </tr>`;
    games.forEach(createRow);
    document.getElementById('games').innerHTML = tableHTML;


    tableHTML = `
    <tr>
        <th class="firstColumn">Miscellaneous</th>
        <th class="description">Description</th>
    </tr>
    `;
    miscellaneous.forEach(createRow);
    document.getElementById('miscellaneous').innerHTML = tableHTML;
}

function createRow(element){
    tableHTML += `
    <tr>
        <td class="firstColumn"><a href="${element.link}">${element.name}</a></td>
        <td class="description">${element.description}</td>
    </tr>
    `;
}