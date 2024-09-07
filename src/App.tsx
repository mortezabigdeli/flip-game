import GameBoard from "./components/GameBoard";
import { gameCards } from "./constant/cardImages";

function App() {
    return (
        <div className="p-11">
            <GameBoard cards={gameCards} />
        </div>
    );
}

export default App;
