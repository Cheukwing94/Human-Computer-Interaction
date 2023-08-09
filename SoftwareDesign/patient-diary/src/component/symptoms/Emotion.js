import React, { useState } from "react";

const Emotion = ({ name, icon, aIcon }) => {

    const [isActive, setIsActive] = useState(false);

    const active = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="emotion">
            <div className="symIcon" onClick={active}>
                {isActive ?
                    aIcon : icon}
            </div>
            <div className="iconName">{name}</div>
        </div>

    )
}

export default Emotion;