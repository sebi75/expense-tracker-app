import React from "react"

interface ProgressBarProps {
    bgcolor: string
    completed: number | 0
}

const ProgressBar: React.FC<ProgressBarProps> = ({ bgcolor, completed }) => {
    const containerStyles = {
        height: 35,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: "inherit",
    }

    const labelStyles = {
        marginLeft: 10,
        padding: 5,
        color: "white",
        fontWeight: "bold",
    }

    return (
        <div
            data-tip={`Spent ${completed}% of months budget`}
            className="tooltip w-[55%] cursor-pointer"
        >
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
