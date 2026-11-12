import GameItem from './GameItem';

const games = [
    { id: 1, title: "The Legend of Zelda", genre: "Adventure" },
    { id: 2, title: "Elden Ring", genre: "RPG" },
    { id: 3, title: "Stardew Valley", genre: "Simulation" },
    { id: 4, title: "Cyberpunk 2077", genre: "RPG" },
    { id: 5, title: "Hades", genre: "Roguelike" }
];

function App() {
    return (
        <div>
            <h1>My Digital Game Vault</h1>

            {games.map(game => (
                <GameItem key={game.id} game={game} />
            ))}
        </div>
    );
}

export default App;
