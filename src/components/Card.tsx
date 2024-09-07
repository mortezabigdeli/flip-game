interface CardProps {
    onClick: () => void;
    flipped?: boolean;
    image: string;
    id: number;
}

const Card = ({ id, image, flipped, onClick }: CardProps) => {
    return (
        <div onClick={onClick} className="w-[128px] h-[128px] bg-red-600 text-center content-center cursor-pointer">
            {flipped && <img src={image} alt="" className="w-100" />}
            {!flipped && <div className="text-3xl text-white">{id}</div>}
        </div>
    );
};

export default Card;
