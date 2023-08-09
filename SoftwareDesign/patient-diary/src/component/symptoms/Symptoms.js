import React, { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker';
import Score from "./Score";

const Symptoms = () => {
    const SymptomsList = ["How anxious you feel today?", "How is your sleep quality last night?", "How tired you feel today?", "How well do you feel today?", "Can you keep focusing on ur work?", "Do you have any joint pain today?", "How depressed you feel today?"]
    const [startDate, setStartDate] = useState(new Date());
    const [size, setSize] = useState("normal")

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    



    return (
        <div className="sympage">
            <div className="symfirstrow">
                <div className="symdatepicker">
                    <DatePicker
                        customInput={<ExampleCustomInput />}
                        dateFormat="dd / MM / yyyy"
                        closeOnScroll={true}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className="fontsizechange">
                    <div className="sizechange" style={{ fontSize: "normal" }} onClick={()=>setSize("normal")}>A</div>
                    <div className="sizechange" style={{ fontSize: "large" }} onClick={()=>setSize("large")}>A</div>
                    <div className="sizechange" style={{ fontSize: "x-large" }} onClick={()=>setSize("x-large")}>A</div>
                    <div className="sizechange" style={{ fontSize: "xx-large" }} onClick={()=>setSize("xx-large")}>A</div>
                </div>
            </div>

            <div className="symptoms">
                
                {SymptomsList.map((sym) => {

                    return (
                        
                        <Score
                            name={sym}
                            size={size}
                        />
                    )

                })}

            </div>
        </div>

    );
}

export default Symptoms;