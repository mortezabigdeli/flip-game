import img1 from "../assets/images/product-1.jpg";
import img2 from "../assets/images/product-2.jpg";
import img3 from "../assets/images/product-3.jpg";
import img4 from "../assets/images/product-4.jpg";
import img5 from "../assets/images/product-5.jpg";
import img6 from "../assets/images/product-6.jpg";
import img7 from "../assets/images/product-7.jpg";
import img8 from "../assets/images/product-8.jpg";

export interface GameCard {
    id: number;
    image: string;
    correct: boolean;
}

export const gameCards: GameCard[] = [
    { id: 1, image: img1, correct: false },
    { id: 2, image: img1, correct: false },
    { id: 3, image: img2, correct: false },
    { id: 4, image: img2, correct: false },
    { id: 5, image: img3, correct: false },
    { id: 6, image: img3, correct: false },
    { id: 7, image: img4, correct: false },
    { id: 8, image: img4, correct: false },
    { id: 9, image: img5, correct: false },
    { id: 10, image: img5, correct: false },
    { id: 11, image: img6, correct: false },
    { id: 12, image: img6, correct: false },
    { id: 13, image: img7, correct: false },
    { id: 14, image: img7, correct: false },
    { id: 15, image: img8, correct: false },
    { id: 16, image: img8, correct: false },
].sort(() => Math.random() - 0.5);
