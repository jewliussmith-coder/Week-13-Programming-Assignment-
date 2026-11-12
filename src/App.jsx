import GameItem from './GameItem';
import { RAW_GAMES, getFavoriteGames } from './logic';

function App() {
    const favoriteGames = getFavoriteGames(RAW_GAMES);

    return (
        <div>
            <h1>My Digital Game Vault</h1>

            <div>
                {favoriteGames.map(game => (
                    <GameItem key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}

export default App;
