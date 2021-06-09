import React from "react"
import './step-inpu.css'


export default ({max, value, onChange}) => {
    
    const step = 1

    return (
        <>
            <div className="rs-input-group rs-input-number">
                <span className="rs-input-number-btn-group-vertical">
                    <button onClick={() => value<max?onChange(value+step):false} type="button" className="rs-btn rs-btn-subtle rs-input-number-touchspin-up"></button>
                    <input
                        autocomplete="off"
                        min={0}
                        max={max}
                        step={step}
                        type="text" className="rs-input" value={value}
                        />
                    <button onClick={() => value>0?onChange(value-step):false} type="button" className="rs-btn rs-btn-subtle rs-input-number-touchspin-down"></button>
                </span>
            </div>
        </>
    );
};


