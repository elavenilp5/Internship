import React, { useState } from "react"
import { Tooltip } from "@mui/material"
import { Fade } from "@mui/material"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/light-border.css"

function LargeTile({ val }) {
  // const [hover, setHover] = useState(false)

  return (
    <li className="tilerow">
      {/* <Tooltip
        title={val.content}
        placement="right-end"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      > */}
      <Tippy
        theme="none"
        placement={"right-end"}
        interactive={true}
        arrow={false}
        offset={[60, -5]}
        content={
          <div
            className="tippy"
            style={{
              backgroundColor: val.background,
            }}
          >
            <h4 style={{ color: "#FDCA0B", backgroundColor: "##9AAEC0" }}>
              {val.title}
            </h4>
            <p>{val.content}</p>
          </div>
        }
      >
        <div
          className="tile"
          style={{ backgroundColor: val.background }}
          // onMouseEnter={() => setHover(true)}
          // onMouseLeave={() => setHover(false)}
        >
          <h4 className="title">{val.title}</h4>
        </div>
      </Tippy>
      {/* </Tooltip> */}

      {/* {hover && (
        <div
          className="tool "
          style={{
            backgroundColor: val.background,
            transform: "transalteX(100px)",
          }}
        >
          <h4
            classname="toolhead"
            style={{ color: "#FDCA0B", backgroundColor: "##9AAEC0" }}
          >
            {val.title}
          </h4>
          <p>{val.content}</p>
        </div>
      )} */}
    </li>
  )
}

export default LargeTile
