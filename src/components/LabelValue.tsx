import React from "react";

const LabelValue = ({ label, value }: { label: string; value: string | number }) => {
    return (
        <div>
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
};

export default LabelValue;
