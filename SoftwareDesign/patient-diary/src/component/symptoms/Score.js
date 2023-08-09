import React from "react";
import { RiEmotionLaughLine, RiEmotionLaughFill, RiEmotionHappyLine, RiEmotionHappyFill, RiEmotionNormalLine, RiEmotionNormalFill, RiEmotionSadLine, RiEmotionSadFill, RiEmotionUnhappyLine, RiEmotionUnhappyFill } from 'react-icons/ri'
import Emotion from "./Emotion";


const Score = ({ name , size}) => {

    const emotion = [
        {
            name: "Excellent",
            Icon: <RiEmotionLaughLine className="emotion_rad" />,
            ActiveIcon: <RiEmotionLaughFill className="emotion_rad_a" />,
        },
        {
            name: "Good",
            Icon: <RiEmotionHappyLine className="emotion_good" />,
            ActiveIcon: <RiEmotionHappyFill className="emotion_good_a" />,
        },
        {
            name: "Average",
            Icon: <RiEmotionNormalLine className="emotion_meh" />,
            ActiveIcon: <RiEmotionNormalFill className="emotion_meh_a" />,
        },
        {
            name: "Bad",
            Icon: <RiEmotionSadLine className="emotion_bad" />,
            ActiveIcon: <RiEmotionSadFill className="emotion_bad_a" />,
        },
        {
            name: "Awful",
            Icon: <RiEmotionUnhappyLine className="emotion_awful" />,
            ActiveIcon: <RiEmotionUnhappyFill className="emotion_awful_a" />,
        },
    ]

    

    
    return (
        <div className="score">

            <div className="symName" style={{fontSize: size}}>
                {name}
            </div>
            <div className="scoreList">
                {emotion.map((item) => {
                    return (
                        <div className="symScore">
                            <Emotion
                                name={item.name}
                                icon={item.Icon}
                                aIcon={item.ActiveIcon}
                            />
                        </div>
                    )
                })}
            </div>
            {/* <div className="symScore">
                <div className="emotion_rad">
                    <div className="symIcon"><RiEmotionLaughLine style={{fontSize: "3em", color: "orange" }}/></div>
                    <div className="iconName">Rad</div>
                </div>
                
                <div className="emotion_good">
                    <div className="symIcon"><RiEmotionHappyLine style={{fontSize: "3em"}}/></div>
                    <div className="iconName">Good</div>
                </div>
                
                <div className="emotion_meh">
                    <div className="symIcon"><RiEmotionNormalLine style={{fontSize: "3em"}}/></div>
                    <div className="iconName">Meh</div>
                </div>
                
                <div className="emotion_bad">
                    <div className="symIcon"><RiEmotionSadLine style={{fontSize: "3em"}}/></div>
                    <div className="iconName">Bad</div>
                </div>
                
                <div className="emotion_awful">
                    <div className="symIcon"><RiEmotionUnhappyLine style={{fontSize: "3em"}}/></div>
                    <div className="iconName">Awful</div>
                </div>
                
            </div> */}
        </div>
    )

}

export default Score;