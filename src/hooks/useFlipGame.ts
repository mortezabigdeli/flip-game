import { useEffect, useState } from "react";
import { GameCard } from "../constant/cardImages";
import { getDiffTime } from "../utils/dateUtil";

type UseFlipGameProps = {
    cards: GameCard[];
};
type SelectedCard = { id: number; image: string } | null;

export const useFlipGame = ({ cards }: UseFlipGameProps) => {
    const [state, setState] = useState<GameCard[]>([...cards]);
    const [selected1, setSelected1] = useState<SelectedCard>(null);
    const [selected2, setSelected2] = useState<SelectedCard>(null);
    const [lock, setLock] = useState<boolean>(false);
    const [choicesCount, setChoicesCount] = useState<number>(4);
    const [remainingTime, setRemainingTime] = useState<number>(getDiffTime(2));

    const handleClick = (id: number, image: string) => {
        if (!lock && selected1?.id !== id) {
            selected1 ? setSelected2({ id, image }) : setSelected1({ id, image });
            setChoicesCount(choicesCount - 1);
        }
    };

    const resetStates = () => {
        setSelected1(null);
        setSelected2(null);
        setLock(false);
    };

    useEffect(() => {
        choicesCount <= 0 && setLock(true);
    }, [choicesCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => prev - 1000);
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
                resetStates();
            } else {
                setTimeout(() => resetStates(), 1000);
            }
        }
    }, [selected1, selected2]);

    return { state, selected1, selected2, choicesCount, remainingTime, handleClick };
};
