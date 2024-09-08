import { useEffect, useRef, useState } from "react";
import { GameCard, getGameCards } from "../constant/cardImages";
import { getDiffTime } from "../utils/dateUtil";

type UseFlipGameProps = {
    maxChoicesCount: number;
    maxTimeInMinute: number;
};
type SelectedCard = { id: number; image: string } | null;

export const useFlipGame = ({ maxChoicesCount, maxTimeInMinute }: UseFlipGameProps) => {
    const [cards, setCards] = useState<GameCard[]>(getGameCards);
    const [selected1, setSelected1] = useState<SelectedCard>(null);
    const [selected2, setSelected2] = useState<SelectedCard>(null);
    const [lock, setLock] = useState<boolean>(false);
    const [choicesCount, setChoicesCount] = useState<number>(maxChoicesCount);
    const [remainingTime, setRemainingTime] = useState<number>(getDiffTime(maxTimeInMinute));

    const interval = useRef<any>();

    const startTimer = () => {
        interval.current = setInterval(() => {
            setRemainingTime((prev) => prev - 1000);
        }, 1000);
    };

    const handleClick = (id: number, image: string) => {
        if (!lock && selected1?.id !== id) {
            selected1 ? setSelected2({ id, image }) : setSelected1({ id, image });
            setChoicesCount(choicesCount - 1);
        }
    };

    const handleResetGame = () => {
        resetStates();
        setChoicesCount(maxChoicesCount);
        setRemainingTime(getDiffTime(maxTimeInMinute));
        setCards(getGameCards);
        clearInterval(interval.current);
    };

    const resetStates = () => {
        setSelected1(null);
        setSelected2(null);
        setLock(false);
    };

    useEffect(() => {
        choicesCount <= 0 && setLock(true);
        choicesCount === 39 && startTimer();
    }, [choicesCount]);

    useEffect(() => {
        return () => clearInterval(interval.current);
    }, []);

    useEffect(() => {
        if (remainingTime < 1) {
            setLock(true);
            clearInterval(interval.current);
        }
    }, [remainingTime]);

    useEffect(() => {
        if (selected1 && selected2) {
            setLock(true);
            if (selected1.image === selected2.image) {
                const newState = cards.map((card) => {
                    if (card.image === selected1.image) {
                        return { ...card, correct: true };
                    } else {
                        return card;
                    }
                });
                setCards(newState);
                resetStates();
            } else {
                setTimeout(() => resetStates(), 1000);
            }
        }
    }, [selected1, selected2]);

    return { cards, selected1, selected2, choicesCount, remainingTime, handleClick, handleResetGame };
};
