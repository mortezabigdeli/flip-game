import GameBoard from "./components/GameBoard";

function App() {
    return (
        <div className="flex justify-center w-full h-full p-20">
            <GameBoard maxChoicesCount={40} maxTimeInMinute={2} />
        </div>
    );
}

export default App;
