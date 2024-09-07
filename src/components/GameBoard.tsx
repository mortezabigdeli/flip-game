import { GameCard } from "../constant/cardImages";
import Card from "./Card";
import { useFlipGame } from "../hooks/useFlipGame";
import { getMinute, getSecond } from "../utils/dateUtil";

const GameBoard = ({ cards }: { cards: GameCard[] }) => {
    const { choicesCount, selected1, selected2, state, remainingTime, handleClick } = useFlipGame({ cards });

    return (
        <>
            <div>
                تعداد حرکت:
                <span>{choicesCount}</span>
            </div>
            <div>
                زمان:
                {getMinute(remainingTime)}:{getSecond(remainingTime)}
            </div>
            <div className="grid grid-cols-4 gap-x-3 gap-y-1 w-[512px]">
                {state.map(({ id, image, correct }) => (
                    <Card
                        onClick={handleClick}
                        key={id}
                        id={id}
                        image={image}
                        flipped={id === selected1?.id || id === selected2?.id || correct}
                    />
                ))}
            </div>
        </>
    );
};

export default GameBoard;
