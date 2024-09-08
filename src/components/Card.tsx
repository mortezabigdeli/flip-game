interface CardProps {
    onClick: (id: number, image: string) => void;
    flipped?: boolean;
    image: string;
    id: number;
}

const Card = ({ id, image, flipped, onClick }: CardProps) => {
    const handleClick = (id: number, image: string) => {
        onClick(id, image);
    };
    return (
        <div
            onClick={() => handleClick(id, image)}
            className={`w-[128px] h-[128px] text-center content-center cursor-pointer ${
                flipped ? "animate-hflip" : ""
            }`}
        >
            {flipped && <img src={image} alt="" className="w-100" />}
            {!flipped && <div className="text-3xl w-100 h-full content-center bg-red-600 text-white">{id}</div>}
        </div>
    );
};

export default Card;
