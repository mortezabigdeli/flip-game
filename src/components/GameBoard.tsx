import React, { useEffect, useState } from "react";
import { GameCard } from "../constant/cardImages";
import Card from "./Card";
import { getDiffTime } from "../utils/dateUtil";

const GameBoard = ({ cards }: { cards: GameCard[] }) => {
    const [state, setState] = useState<GameCard[]>([...cards]);
    const [selected1, setSelected1] = useState<{ id: number; image: string } | null>(null);
    const [selected2, setSelected2] = useState<{ id: number; image: string } | null>(null);
    const [lock, setLock] = useState<boolean>(false);
    const [count, setCount] = useState<number>(40);
    const [time, setTime] = useState<number>(getDiffTime(2));

    const handleClick = (id: number, image: string) => {
        if (!lock && selected1?.id !== id) {
            selected1 ? setSelected2({ id, image }) : setSelected1({ id, image });
            setCount(count - 1);
        }
    };

    const reset = () => {
        setSelected1(null);
        setSelected2(null);
        setLock(false);
    };

    useEffect(() => {
        count <= 1 && setLock(true);
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev - 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (selected1 && selected2) {
            setLock(true);
            if (selected1.image === selected2.image) {
                const newState = state.map((card) => {
                    if (card.image === selected1.image) {
                        return { ...card, correct: true };
                    } else {
                        return card;
                    }
                });
                setState(newState);
                reset();
            } else {
                setTimeout(() => reset(), 1000);
            }
        }
    }, [selected1, selected2]);

    return (
        <>
            <div>
                تعداد حرکت:
                <span>{count}</span>
            </div>
            <div>
                زمان:
                {Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))}:{Math.floor((time % (1000 * 60)) / 1000)}
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
