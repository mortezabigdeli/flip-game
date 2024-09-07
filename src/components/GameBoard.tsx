import React, { useEffect, useState } from "react";
import { GameCard } from "../constant/cardImages";
import Card from "./Card";

const GameBoard = ({ cards }: { cards: GameCard[] }) => {
    const [state, setState] = useState<GameCard[]>([...cards]);
    const [selected1, setSelected1] = useState<{ id: number; image: string } | null>(null);
    const [selected2, setSelected2] = useState<{ id: number; image: string } | null>(null);
    const [lock, setLock] = useState<boolean>(false);

    const handleClick = (id: number, image: string) => {
        if (!lock && selected1?.id !== id) {
            selected1 ? setSelected2({ id, image }) : setSelected1({ id, image });
        }
    };

    const reset = () => {
        setSelected1(null);
        setSelected2(null);
        setLock(false);
    };

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

    console.log(state, selected1, selected2);
    return (
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
    );
};

export default GameBoard;
