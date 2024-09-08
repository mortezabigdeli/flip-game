import React from "react";

const Button = ({ onClick, title }: { onClick: () => void; title: string }) => {
    return (
        <button onClick={onClick} className="bg-yellow-300 px-4 py-2 my-2 rounded-md hover:bg-yellow-400">
            {title}
        </button>
    );
};

export default Button;
