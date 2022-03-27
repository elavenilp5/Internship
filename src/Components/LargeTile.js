import React, { useState } from "react";


function LargeTile({ val }) {
    const [hover, setHover] = useState(false)

    return (
        <li className="tilerow">
            <div className="tile" style={{ backgroundColor: val.background }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <h4 className="title">{val.title}</h4>
            </div>
            {hover && <div className="tool arrow-up" style={{ backgroundColor: val.background }}><p>{val.content}</p></div>}</li>
    )
}

export default LargeTile;