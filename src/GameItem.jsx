function GameItem({ game }) {
    return (
        <div>
            <h2>{game.title}</h2>
            <p>Genre: {game.genre}</p>
        </div>
    );
}

export default GameItem;