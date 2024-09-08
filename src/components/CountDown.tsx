import { getHour, getMinute, getSecond } from "../utils/dateUtil";

interface CountDownProps {
    timestamp: number;
}

const CountDown = ({ timestamp }: CountDownProps) => {
    const hour = getHour(timestamp);
    return (
        <div className="text-lg">
            <span className="ps-1"> زمان:</span>
            {!!hour && `${String(hour).padStart(2, "0")}:`}
            {String(getMinute(timestamp)).padStart(2, "0")}:{String(getSecond(timestamp)).padStart(2, "0")}
        </div>
    );
};

export default CountDown;
