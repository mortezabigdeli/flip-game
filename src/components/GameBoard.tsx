import Card from "./Card";
import { useFlipGame } from "../hooks/useFlipGame";
import CountDown from "./CountDown";
import LabelValue from "./LabelValue";
import Button from "./Button";

interface GameBoardProps {
    maxChoicesCount: number;
    maxTimeInMinute: number;
}

const GameBoard = ({ maxChoicesCount, maxTimeInMinute }: GameBoardProps) => {
    const { choicesCount, selected1, selected2, cards, remainingTime, handleClick, handleResetGame } = useFlipGame({
        maxChoicesCount,
        maxTimeInMinute,
    });

    return (
        <div className="w-[512px]">
            <div className="flex w-100 justify-between">
                <CountDown timestamp={remainingTime} />
                <LabelValue label="تعداد حرکت:" value={choicesCount} />
            </div>
            <div className="grid grid-cols-4 gap-x-3 gap-y-1">
                {cards.map(({ id, image, correct }) => (
                    <Card
                        onClick={handleClick}
                        key={id}
                        id={id}
                        image={image}
                        flipped={id === selected1?.id || id === selected2?.id || correct}
                    />
                ))}
            </div>
            <div>
                <Button onClick={handleResetGame} title="شروع دوباره" />
            </div>
        </div>
    );
};

export default GameBoard;
