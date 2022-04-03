import React, { useState } from "react"

function LargeTile({ val }) {
  const [hover, setHover] = useState(false)

  return (
    <li className="tilerow">
      <div
        className="tile"
        style={{ backgroundColor: val.background }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h4 className="title">{val.title}</h4>
      </div>
      {hover && (
        <div className="tool " style={{ backgroundColor: val.background }}>
          {/* <div className="arrow-up"></div> */}
          <h4
            classname="toolhead"
            style={{ color: "#FDCA0B", backgroundColor: "##9AAEC0" }}
          >
            {val.title}
          </h4>
          <p>{val.content}</p>
        </div>
      )}
    </li>
  )
}

export default LargeTile
